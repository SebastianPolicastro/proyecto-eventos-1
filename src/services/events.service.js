import * as eventsRepository from '../repositories/events.repository.js';

export const getEvents = () => eventsRepository.getAll();
