export default class Event {
  constructor(title, place = null, date = null) {
    this.title = title;
    this.place = place;
    this.date = date;
    this.isPrev = false;
    this.isExam = false;
    this.isDiploma = false;
  }

  setIsPrev() {
    this.isPrev = true;
    return this;
  }

  setIsExam() {
    this.isExam = true;
    return this;
  }

  setIsDiploma() {
    this.isDiploma = true;
    return this;
  }
}
