import React from "react";
import { NavLink } from "react-router-dom";

const Pricing = () => {
    return (
        <div>
            <p>
                All images are printed using glossy fiberbase silver gelatin double
                weight paper and processed to the highest archival standards. The prints
                are then selenium toned for additional permanence, washed and then air
                dried. Processing fiberbase paper this way results in a print surface
                that has a beautiful sheen to it that reveals the full tonal range that
                the paper is capable of delivering. It is not a mirror-like glossy
                surface. I personally print and process all prints to order.
      </p>
            <p>
                Prints are offered in two sizes. They are mounted on white acid-free
                4-ply 100% cotton rag museum board and then overmatted using the same
        museum board. Frames are silver metal.{" "}
                <NavLink to="/contact">Contact</NavLink> for details.
      </p>
            <table>
                <tbody>
                    <tr>
                        <th colSpan="4">Normal Prints</th>
                    </tr>
                    <tr>
                        <td>Print Size</td>
                        <td>Matted &amp; Framed Size</td>
                        <td>Matted Price</td>
                        <td>Matted, Overmatted &amp; Framed Price</td>
                    </tr>
                    <tr className="even">
                        <td>11"&times;14"</td>
                        <td>16"&times;20"</td>
                        <td>$135</td>
                        <td>$190</td>
                    </tr>
                    <tr className="odd">
                        <td>16"&times;20"</td>
                        <td>22"&times;28"</td>
                        <td>$190</td>
                        <td>$265</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th colSpan="4">Flower Prints</th>
                    </tr>
                    <tr className="even">
                        <td>11"&times;14"</td>
                        <td>16"&times;20"</td>
                        <td>$155</td>
                        <td>$210</td>
                    </tr>
                    <tr className="odd">
                        <td>16"&times;20"</td>
                        <td>22"&times;28"</td>
                        <td>$215</td>
                        <td>$290</td>
                    </tr>
                </tbody>
            </table>
            <p>
                6% sales tax will be added to orders shipped within Michigan. Shipping
                costs are variable depending on delivery speed and carrier. Orders are
                shipped within 3&ndash;4 weeks unless otherwise specified at time of
                ordering.
      </p>
            <p>
                The negative films used to create these prints are Kodak Tmax 100 and
                Tmax 400 in 8"&times;10" film size.
      </p>
            <h2>
                Limited Edition Portfolio &ndash;{" "}
                <NavLink
                    to="/galleries/cathedral_portfolio"
                    title="View the Portfolio gallery"
                >
                    English Cathedrals
        </NavLink>
            </h2>
            <div className="rightw">
                <img src="/img/web/portfolio.jpg" alt="A view of a printed portfolio" />
            </div>
            <p>
                Only 30 will be made, signed and numbered. They are mounted on
                16"&times;20" mounts. They are accompanied by a text sheet describing
                the photos. Protecting each photo is an overlay of Apollo Paper. They
                are signed on the front while both the number of the portfolio and print
                are noted on the back in a special stamp. Also on the back is the
                handwritten title of each print.
      </p>
            <p>
                The collection of 11 prints is housed in an elegant, handmade clamshell
                box, that is covered with a gray linen fabric. There is a protective
                clear plastic bag that covers the portfolio.
      </p>
            <p>
                The cost is $995 which brings down the individual price for each print
                to just over $90 each or a 27% savings.
      </p>
        </div>
    );
};

export default Pricing;
