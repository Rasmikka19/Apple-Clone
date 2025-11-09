import React from "react"


const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-[12px] leading-relaxed">
      {/* ---------- Top Footer Paragraph ---------- */}
      <div className="max-w-6xl mx-auto px-5 py-6 border-b border-gray-300">
        <p>
          ◊Instant cashback is available with the purchase of an <a href="#" className="underline text-gray-600">eligible product</a> with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001 applies.<a href="#" className="underline text-gray-600">Click here</a> to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice.<a href="#" className="underline text-gray-600"> Additional terms apply.</a> Instant cashback is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
        </p>
        <p className="mt-2">
          ‡No Cost EMI is available with the purchase of an<a href="#" className="underline text-gray-600"> eligible</a> product made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice.<a href="#" className="underline text-gray-600"> Terms apply.</a>
        </p>
        <p className="mt-2">
          1. Testing conducted by Apple in July 2025 using AirPods Pro 3 paired with iPhone 16 with pre-release AirPods firmware and iOS 26. Noise reduction was tested in accordance with IEC 60268-24. Comparison made against the best-selling wireless in-ear headphones commercially available at the time of testing. Performance depends on device settings, environment and many other factors.
        </p>
        <p className="mt-2">
          A subscription is required for Apple TV+.
        </p>
        <p className="mt-2">
          Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
        </p>
      </div>

      {/* ---------- Middle Footer Links ---------- */}
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-5 gap-6">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-[12px] text-black mb-2">Shop and Learn</h3>
          <ul className="space-y-1 text-[13px]">
            <li className="hover:underline"><a href="#">Store</a></li>
            <li className="hover:underline"><a href="#">Mac</a></li>
            <li className="hover:underline"><a href="#">iPad</a></li>
            <li className="hover:underline"><a href="#">iPhone</a></li>
            <li className="hover:underline"><a href="#">Watch</a></li>
            <li className="hover:underline"><a href="#">AirPods</a></li>
            <li className="hover:underline"><a href="#">TV &amp; Home</a></li>
            <li className="hover:underline"><a href="#">AirTag</a></li>
            <li className="hover:underline"><a href="#">Accessories</a></li>
            <li className="hover:underline"><a href="#">Gift Cards</a></li>
          </ul>

          {/* Column 2 */}

          <h3 className="font-semibold text-[12px] text-black mb-2 mt-4">Apple Wallet</h3>
          <ul className="space-y-1 text-[13px]">
            <li className="hover:underline"><a href="#">Wallet</a></li>
          </ul>

        </div>


        {/* Column 3 */}
        <div>

          <h3 className="font-semibold text-[12px] text-black mb-2">Account</h3>
          <ul className="space-y-1 text-[13px]">
            <li className="hover:underline"><a href="#">Manage Your Apple ID</a></li>
            <li className="hover:underline"><a href="#">Apple Store Account</a></li>
            <li className="hover:underline"><a href="#">iCloud.com</a></li>
          </ul>

          {/* Column 4 */}

          <h3 className="font-semibold text-[12px] text-black mb-2 mt-4">Entertainment</h3>
          <ul className="space-y-1 text-[13px]">
            <li className="hover:underline"><a href="#">Apple One</a></li>
            <li className="hover:underline"><a href="#">Apple TV+</a></li>
            <li className="hover:underline"><a href="#">Apple Music</a></li>
            <li className="hover:underline"><a href="#">Apple Arcade</a></li>
            <li className="hover:underline"><a href="#">Apple Podcasts</a></li>
            <li className="hover:underline"><a href="#">Apple Books</a></li>
            <li className="hover:underline"><a href="#">App Store</a></li>
          </ul>

        </div>



        {/* Column 5 */}
        <div>
          <h3 className="font-semibold text-[12px] text-black mb-2">Apple Store</h3>
          <ul className="space-y-1 text-[13px]">
            <li className="hover:underline"><a href="#">Find a Store</a></li>
            <li className="hover:underline"><a href="#">Genius Bar</a></li>
            <li className="hover:underline"><a href="#">Today at Apple</a></li>
            <li className="hover:underline"><a href="#">Group Reservations</a></li>
            <li className="hover:underline"><a href="#">Apple Camp</a></li>
            <li className="hover:underline"><a href="#">Apple Trade In</a></li>
            <li className="hover:underline"><a href="#">Ways to Buy</a></li>
            <li className="hover:underline"><a href="#">Recycling Programme</a></li>
            <li className="hover:underline"><a href="#">Order Status</a></li>
            <li className="hover:underline"><a href="#">Shopping Help</a></li>
          </ul>
        </div>

        {/* Column 6 */}
        <div>
          <h3 className="font-semibold text-[12px] text-black mb-2">For Business</h3>
          <ul className="space-y-1 text-[13px]">
            <li className="hover:underline"><a href="#">Apple and Business</a></li>
            <li className="hover:underline"><a href="#">Shop for Business</a></li>
          </ul>

          <h3 className="font-semibold text-[12px] text-black mt-5 mb-2">For Education</h3>
          <ul className="space-y-1 text-[13px]">
            <li className="hover:underline"><a href="#">Apple and Education</a></li>
            <li className="hover:underline"><a href="#">Shop for Education</a></li>
            <li className="hover:underline"><a href="#">Shop for University</a></li>
          </ul>

          <h3 className="font-semibold text-[12px] text-black mt-5 mb-2">For Healthcare</h3>
          <ul className="space-y-1 text-[13px]">
            <li className="hover:underline"><a href="#">Apple in Healthcare</a></li>
          </ul>

          <h3 className="font-semibold text-[12px] text-black mt-5 mb-2">For Government</h3>
          <ul className="space-y-1 text-[13px]">
            <li className="hover:underline"><a href="#">Apple and Government</a></li>
          </ul>

        </div>


        {/* Column 7 */}
        <div>
          <h3 className="font-semibold text-[12px] text-black mb-2">Apple Values</h3>
          <ul className="space-y-1 text-[13px]">
            <li className="hover:underline"><a href="#">Accessibility</a></li>
            <li className="hover:underline"><a href="#">Environment</a></li>
            <li className="hover:underline"><a href="#">Privacy</a></li>
            <li className="hover:underline"><a href="#">Supplier Responsibility</a></li>
          </ul>

          <h3 className="font-semibold text-[12px] text-black mt-5 mb-2">About Apple</h3>
          <ul className="space-y-1 text-[13px]">
            <li className="hover:underline"><a href="#">Newsroom</a></li>
            <li className="hover:underline"><a href="#">Apple Leadership</a></li>
            <li className="hover:underline"><a href="#">Career Opportunities</a></li>
            <li className="hover:underline"><a href="#">Investors</a></li>
            <li className="hover:underline"><a href="#">Ethics & Compliance</a></li>
            <li className="hover:underline"><a href="#">Events</a></li>
            <li className="hover:underline"><a href="#">Contact App</a></li>
          </ul>

        </div>


      </div>
      {/* ---------- Bottom Footer ---------- */}
      <div className="max-w-6xl mx-auto px-5 py-6 text-xs text-gray-500">
        <p className="mb-2">
          More ways to shop: <a href="#" className="text-blue-600 underline">Find an Apple Store</a> or
          <a href="#" className="text-blue-600 underline"> other retailer</a> near you. Or call <a href="#" className="text-blue-600 underline">000800 040 1966.</a>
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:border-t border-gray-300 pt-4 mt-3">
          <p className="mb-2 md:mb-0 hover:underline cursor-pointer order-1 md:order-2">India</p>
          <div className="flex flex-wrap items-center gap-3 order-2 md:order-1">
            <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
            <ul className="flex flex-wrap gap-3 text-[13px]">
              <li className="hover:underline"><a href="#">Privacy Policy</a></li>
              <li>|</li>
              <li className="hover:underline"><a href="#">Terms of Use</a></li>
              <li>|</li>
              <li className="hover:underline"><a href="#">Sales Policy</a></li>
              <li>|</li>
              <li className="hover:underline"><a href="#">Legal</a></li>
              <li>|</li>
              <li className="hover:underline"><a href="#">Site Map</a></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
