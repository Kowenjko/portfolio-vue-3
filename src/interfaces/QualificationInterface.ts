export interface QualificationDetail {
  title: string
  city: string
  date: string
}

export interface Qualification {
  educations: QualificationDetail[]
  works: QualificationDetail[]
}
