const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const events = {
  APPOINTMENT_SCHEDULED: "appointmentScheduled",
  PATIENT_ARRIVED: "patientArrived",
  DIAGNOSIS_MADE: "diagnosisMade",
};

function doctorClinic() {
  console.log("Welcome to the Dr's Clinic");

  eventEmitter.on(events.APPOINTMENT_SCHEDULED, (patient) => {
    console.log(`Appointment scheduled for ${patient}`);
  });

  eventEmitter.on(events.PATIENT_ARRIVED, (patient) => {
    console.log(`Patient ${patient} has arrived.`);
  });

  eventEmitter.on(events.DIAGNOSIS_MADE, (diagnosis) => {
    console.log(`Diagnosis: ${diagnosis}`);
  });

  eventEmitter.emit(events.APPOINTMENT_SCHEDULED, "Saman Pradhan");
  eventEmitter.emit(events.PATIENT_ARRIVED, "Saman Pradhan");

  eventEmitter.emit(events.DIAGNOSIS_MADE, "Common cold");

  console.log("Doctor's clinic process completed.");
}

doctorClinic();
