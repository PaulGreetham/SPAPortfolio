export interface Qualification {
  name: string;
  url: string;
  logo: string;
  qualification: {
    degree: string;
    grade: string;
  };
  startDate: string;
  endDate: string;
  location: string;
}

export interface onlineQualification {
  name: string;
  url: string;
  logo: string;
  date: string;
}
