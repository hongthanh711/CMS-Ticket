import { collection } from 'firebase/firestore'
import { db } from './init-firebase'

export const listTicketColection = collection(db, 'ticket-list')
export const controlTicketColection = collection(db, 'control-ticket')
export const packageTicketColection = collection(db, 'package-ticket')
