export interface fastaKjb {
  browserURL: URL
  mykajabiURL: URL
  content: Response | Promise<Response>
}

export interface fastaVariables {
  fastaKjb: fastaKjb
}
