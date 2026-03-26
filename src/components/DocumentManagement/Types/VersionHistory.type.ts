export interface VersionItem {
  versionNo: string
  date: string
  changeNote: string
}

export interface VersionHistory {
  contract: string
  employeeName: string
  versions: VersionItem[]
}
