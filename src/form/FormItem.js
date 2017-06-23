import React from 'react';
import { Component, PropTypes } from '../utils/';
import Layout from '../layout/';
import AsyncValidator from 'async-validator';

const { Row, Col } = Layout;

export default class FormItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',        // 错误信息
      help: '',         // 帮助信息
      isRequired: false, // 是否 【必填】
      validating: false, // 是否验证成功
      valid: false,     // 是否有效
      initialValue: null
    }
  }

  componentDidMount() {
    const { field } = this.props;
    let { isRequired, help } = this.props;

    if (field) {
      const value = this.getInitialValue()
      this.parent().addField(this);
      // 是否必填处理
      let rules = this.getRules();
      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule && rule.required) isRequired = true;
          return rule;
        });
      }
      this.setState({
        isRequired, help,
        initialValue: value
      })
    }
  }
  getInitialValue() {
    let model = this.parent().props.model
    return model[this.props.field]
  }
  // 获取 Form组件的 校验规则
  getRules() {
    let formRules = this.parent().props.rules;
    return [].concat(this.props.rules || formRules ? formRules[this.props.field] : [] || []);
  }

  resetField() {
    let { valid, error } = this.state;

    valid = true;
    error = '';

    this.setState({ valid, error });

    let val = this.fieldValue()
    let model = this.parent().props.model;
    if (Array.isArray(val)) {
      model[this.props.field] = this.state.initialValue || [];
    } else {
      model[this.props.field] = this.state.initialValue
    }
  }

  getFilteredRule() {
    const rules = this.getRules();
    // 过滤数组中的undefined
    return rules.filter(rule => {
      return rule;
    });
  }

  validate(trigger, cb) {
    let { validating, valid, error } = this.state;
    const rules = this.getFilteredRule();

    if (!rules || rules.length === 0) {
      cb && cb();
      return true;
    }

    validating = true;
    const descriptor = { [this.props.field]: rules };
    const validator = new AsyncValidator(descriptor);
    const model = { [this.props.field]: this.fieldValue() };

    validator.validate(model, { firstFields: true }, errors => {
      valid = !errors;
      error = errors ? errors[0].message : '';
      cb && cb(errors);
      validating = false;
    });

    this.setState({ validating, valid, error });

  }

  fieldValue() {
    const model = this.parent().props.model;
    if (!model || !this.props.field) { return; }
    let str = model[this.props.field];
    return str;
  }

  parent() {
    return this.context.component;
  }
  onFieldBlur() {
    this.validate('blur');
  }
  onFieldChange() {
    this.validate('change');
  }

  layoutFilter(col) {
    const { layout } = this.parent().props;
    if (layout === "vertical") {
      return { span: 0 }
    }
    if (layout === "inline") {
      return { span: 0 }
    }
    return col
  }

  renderLabel() {
    const { label, labelCol, prefixCls } = this.props;
    const labelColClassName = this.classNames(
      `${prefixCls}-label`,
      labelCol && labelCol.className,
    );

    return (
      <Col {...this.layoutFilter(labelCol) } className={labelColClassName}>
        {label && <label className={`${prefixCls}-field`}>{label}</label>}
      </Col>
    )
  }
  renderWrapper() {
    const { prefixCls, wrapperCol, children } = this.props;
    const { error, help } = this.state;

    const className = this.classNames(
      `${prefixCls}-control`,
      wrapperCol && wrapperCol.className,
    )
    return (
      <Col {...this.layoutFilter(wrapperCol) }
        className={className}
        onBlur={this.onFieldBlur.bind(this)}
        onChange={this.onFieldChange.bind(this)}
      >
        {children}
        {
          (error || help) && <div className={this.classNames(`${prefixCls}-explain`)}>{error || help}</div>
        }
      </Col>
    )
  }
  render() {
    const { prefixCls, className, style } = this.props;
    const { isRequired, error, help } = this.state;
    const cls = this.classNames(className, {
      [`${prefixCls}`]: true,
      'required': isRequired,
      'error': error !== '',
      'help': help !== '',
    })
    return (
      <Row style={style} className={cls}>
        {this.renderLabel.bind(this)()}
        {this.renderWrapper.bind(this)()}
      </Row>
    );
  }
}

FormItem.contextTypes = {
  component: PropTypes.any
};

FormItem.propTypes = {
  prefixCls: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
  name: PropTypes.string,
}

FormItem.defaultProps = {
  prefixCls: 'w-form-item',
  label: '',
}
