// classes
import Event from "../classes/Event.class.js";

const allEvents = [
  new Event("Խորհրդատվություն ընկեր Գևորգյանի հետ", "1215", "2026-06-05 12:00"),
  new Event("Պաշտպանություն", "51009 կամ 51010", "2026-06-08 10:00").setIsDiploma(),
  
  new Event("Խորհրդատվություն ընկեր Գևորգյանի հետ", "1215", "2026-06-02 12:00"),
  new Event("Դատարան", "Նազարբեկյան 40", "2026-02-20 10:00"),
  new Event("Դատարան", "Նազարբեկյան 40", "2026-02-27 10:00"),
  new Event("Դատարան", "Նազարբեկյան 40", "2026-03-10 10:00"),
  new Event("Դինամիկ վեբ կայքերի նախագծում", "51009", "2026-04-01 09:30").setIsExam(),
  new Event("Տոկոսավորում", "5105", "2026-05-22 12:50"),
];

allEvents.sort((a, b) => (new Date(a.date).getTime() - new Date(b.date).getTime()));

const prevEvents = [];
const featureEvents = [];

for (let i = 0; i < allEvents.length; ++i) {
  const event = allEvents[i];
  const { date } = event;

  if (!date) {
    featureEvents.push(event);
    continue;
  }

  const eDate = new Date(date);
  const nDate = new Date();

  if (eDate - nDate < 0) {
    prevEvents.push(event.setIsPrev());
  } else {
    featureEvents.push(event);
  }
}

prevEvents.reverse();

const events = { featureEvents, prevEvents };

export default events;
