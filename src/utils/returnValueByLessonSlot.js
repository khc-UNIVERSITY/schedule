export default function returnValueByLessonSlot(slot, ...values) {
  switch (slot) {
    case "09:30": {
      return values[0];
    }

    case "11:00": {
      return values[1];
    }

    case "12:50": {
      return values[2];
    }

    case "14:20": {
      return values[3];
    }

    default: {
      return null;
    }
  }
}
