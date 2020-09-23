import React from 'react'

function Registry() {
    return (
        <div>
            <div className="circle-logo-registry"></div>
            <div className="registry-container">
                <img className="centered-registry-icon" onClick={launchCrateBarrel} src="data:image/png;base64,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" alt="" />
                {/* <img className="centered-registry-icon amazon" onClick={launchAmazonRegistry} src="https://m.media-amazon.com/images/G/01/weddingregistry/wedding-5jyajgvv/wedding-logo-en_US._CB1547838856_.svg" alt="" /> */}

                <img className="centered-registry-icon amazon" onClick={launchAmazonRegistry} alt="" />

            </div>
        </div>

    )
}
let windowObjectReference;
//Below is a variable with the specifics of what I want the new tab to gen when function is executed.
const strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
const launchCrateBarrel = () => {
    windowObjectReference = window.open("https://www.crateandbarrel.com/gift-registry/ali-macmillan-and-grant-wilhelm/r6110793", "CrateBarrel_WindowName", strWindowFeatures);
}
const launchAmazonRegistry = () => {
    windowObjectReference = window.open("https://www.amazon.com/wedding/share/wilhelm10102020", "AmazonRegistry_WindowName", strWindowFeatures);
}
export default Registry
