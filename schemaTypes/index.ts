import page from './page'
import header from './header'
import footer from './footer'
import hero from './hero'
import contentSection from './contentSection'
import gallery from './gallery'
import contactForm from './contactForm'
import service from './service'
import servicesList from './servicesList'
import event from './event'
import location from './location'
import eventAggregator from './eventAggregator'

export const schemaTypes = [
  // Document types
  page,
  service,
  event,
  location,
  
  // Object types (components)
  header,
  footer,
  hero,
  contentSection,
  gallery,
  contactForm,
  servicesList,
  eventAggregator,
]
