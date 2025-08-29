export class Student {
  static async list() {
    return [
      {
        id: 1,
        full_name: "Aarav Sharma",
        school_name: "Govt. Senior Secondary School",
        class_standard: "Class 10",
        category: "SC",
        scholarship_type: "pre_matric",
        application_status: "submitted",
        completed_steps: [
          "aadhaar_verified",
          "bank_account_ready"
        ],
      },
    ];
  }
}

export default Student;


