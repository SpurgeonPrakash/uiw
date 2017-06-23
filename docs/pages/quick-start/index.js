import Markdown from '../../libs/markdown/';
export default class QuickStart extends Markdown {
  document(locale, fileName) {
    return require(`../../md/${locale}/${fileName}.md`);
  }
}