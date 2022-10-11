class Data {
  private day: number;
  private month: number;
  private year: number;

  constructor(d: number, m: number, a: number) {
    if (new Date(`${a}-${m}-${d}`).getDate() !== m) {
      this.day = 1;
      this.month = 1;
      this.year = 1900;
    } else {
      this.day = d;
      this.month = m;
      this.year = a;
    }
  }

  getMonthName = () => {
    enum monthMap {
      'Janeiro' = 1,
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    };

    return monthMap[this.month];
  };

  isLeapYear = () => this.year % 4 === 0;

  compare = (date: Data) => {
    const thisDate = `${this.day}/${this.month}/${this.year}`;
    const compareDate = `${date.day}/${date.month}/${date.year}`;

    if (thisDate > compareDate) {
      return 1
    }
    if (thisDate < compareDate) {
      return -1
    }
    return 0
  }

  format = (dateFormat: string) => {
    const d = this.day >= 10 ? this.day.toString() : `0${this.day}`;
    const m = this.month >= 10 ? this.month.toString() : `0${this.month}`;
    const a = this.year.toString();

    return dateFormat.replace('dd', d)
    .replace('mm', m).replace('M', this.getMonthName())
    .replace('aaaa', a).replace('aa', a.slice(2));
  }
}

const data = new Data(11, 10, 2022);

console.log(data.getMonthName());
console.log(data.isLeapYear());

const data2 = new Data(22, 8, 1997);

console.log(data.compare(data2));

console.log(data.format('dd/mm/aaaa'));
console.log(data.format('aaaa-mm-dd'));
console.log(data.format('dd de M de aa'));
console.log(data.format('dd, M de aaaa'));
