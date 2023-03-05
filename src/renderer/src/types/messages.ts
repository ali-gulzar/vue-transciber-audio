interface MetaDeta {
  persons: string[]
  action: string[]
  tasks: string[]
  other_stuff: string
}

export interface Message {
  transcribe_session: string
  chunk_id: number
  speaker: string
  transcribed_text: string
  likelihoods: number[]
  time: string
  information: MetaDeta
}
