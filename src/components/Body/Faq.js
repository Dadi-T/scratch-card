import Accordian from "../Misc/Accordian";
export default function FAQ() {
  return (
    <div>
      <section>
        <Accordian title="How can I make an order ?">
          <div>
            <p>
              Once you found the right product for you all you have to do is to
              follow this steps
            </p>
            <ul>
              <li>
                Click on the product to get more details about the payment
                methods accepted by the vendor, the delivery and the minimum
                number of pieces to order.
              </li>
              <li>
                Contact the vendor for more information and to arrange payment
                and delivery methods
              </li>
            </ul>
          </div>
        </Accordian>
      </section>
      <section>
        <Accordian title="Is SELL’A free ?">
          <p>
            There are no hidden fees or additional costs when you use SELL’A.
            Our website / application is completely free
          </p>
        </Accordian>
      </section>
      <section>
        <Accordian title="How can I reach you to ask a question or report a problem ?">
          <div>
            <p>
              If you have a question or if you need assistance to use the
              features of the application, you can contact us by chat or in the
              CONTACT US page
            </p>
            <p>We have a friendly customer service team ready to assist you</p>
          </div>
        </Accordian>
      </section>
      <section>
        <Accordian title="After I find my perfect product, how can I order it?">
          <p>
            All you have to do is click on the product to get more information
            about the payment methods accepted by the vendor, the delivery
            method, and the minimum number of pieces to order. Contact the
            vendor for more information and to work out payment and delivery
            arrangements.
          </p>
        </Accordian>
      </section>
      <section>
        <Accordian title="What can I do if I have a question or if a problem occurs?">
          <div>
            <p>
              If you have a question or if you need assistance using the
              features of the application, please contact us by chat or through
              the CONTACT US page. If a bug is detected, please report it as
              soon as possible.
            </p>
            <p>We have a friendly customer service team ready to assist you</p>
          </div>
        </Accordian>
      </section>
    </div>
  );
}
