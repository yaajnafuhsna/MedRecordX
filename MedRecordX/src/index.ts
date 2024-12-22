class MedicalRecord {
    id: string;
    patientName: string;
    doctorName: string;
    diagnosis: string;
    treatmentPlan: string;
    recordURL: string;
    createdAt: Date;
    updatedAt: Date | null;
  }
  
  const medicalRecordStorage = StableBTreeMap<string, MedicalRecord>(0);
  
  app.post("/medicalRecords", (req, res) => {
    const record: MedicalRecord = {
      id: uuidv4(),
      createdAt: getCurrentDate(),
      ...req.body,
      updatedAt: null,
    };
    medicalRecordStorage.insert(record.id, record);
    res.json({ message: "Medical record added successfully", record });
  });
  
  // Similar endpoints as `artworks`, replacing "artworks" with "medicalRecords".
  