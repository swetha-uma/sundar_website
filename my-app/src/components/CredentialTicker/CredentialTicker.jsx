import { credentials } from '../../data/dummyData'
import './CredentialTicker.css'

function CredentialTicker() {
  const tickerItems = [...credentials, ...credentials]

  return (
    <section className="credential-ticker" aria-label="Professional credentials">
      <div className="credential-ticker__track-wrap">
        <div className="credential-ticker__track">
          {tickerItems.map((credential, index) => (
            <span key={`${credential}-${index}`} className="credential-ticker__item">
              {credential}
              <span className="credential-ticker__dot" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CredentialTicker
