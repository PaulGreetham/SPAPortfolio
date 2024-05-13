export interface Qualification {
  name: string;
  url: string;
  logo: string;
  qualification: {
    degree: string;
  };
  startDate: string;
  endDate: string;
  location: string;
  info: string;
  contentList: string[];
}

export interface onlineQualification {
  name: string;
  url: string;
  logo: string;
  qualification: string;
  date: string;
}
