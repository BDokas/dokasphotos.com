import React from "react";
import { NavLink, Route } from "react-router-dom";

function Techniques() {
   return (
      <div className="techniques">
         <p>
            When you look at an image it isn&rsquo;t always apparent how it was
            made, here are the techniques I follow in making my prints.
      </p>
         <ul>
            <li>
               <NavLink to="/techniques/flower_prints">On the Flower Prints</NavLink>
            </li>
            <li class="quiet">The split-toned process.</li>
            <li>
               <NavLink to="/techniques/making_prints">
                  On Making Prints - Overview
          </NavLink>
            </li>
            <li class="quiet">
               An 8"&times;10", silver bromide and unsharp masks.
        </li>
            <li>
               <NavLink to="/techniques/making_prints/details">
                  On Making Prints - Technical Details
          </NavLink>
            </li>
            <li class="quiet">A detailed synopsis of how I make prints.</li>
            <li>
               <NavLink to="/techniques/cameras">My Cameras</NavLink>
            </li>
            <li class="quiet">The 8"&times;10" cameras I use.</li>
            <li>
               <NavLink to="/techniques/enlarger">The Enlarger</NavLink>
            </li>
            <li class="quiet">The construction of my englarger.</li>
         </ul>
         <h2>Articles</h2>
         <p>
            Guides and tips I&rsquo;ve written for printing better pictures with a
            large format camera.
      </p>
         <ul>
            <li>
               <NavLink to="/techniques/ground_glass">
                  How To Ground Your Own Glass
          </NavLink>
            </li>
            <li class="quiet">
               An inexpensive way to make a brighter ground glass with better
               resolution.
        </li>
         </ul>

         <Route path="/techniques/flower_prints" component={Flower_Prints} />
         <Route path="/techniques/making_prints" component={Making_Prints} />
         <Route path="/techniques/making_prints/details" component={Making_Prints_Details} />
         <Route path="/techniques/cameras" component={Camera} />
         <Route path="/techniques/enlarger" component={Enlarger} />
         <Route path="/techniques/ground_glass" component={Ground_Glass} />
      </div>
   );
}

const Flower_Prints = () => {
   return (
      <div className="technique_popup">
         <div class="right">
            <img
               src={require("../img/web/flower_print.jpg")}
               alt="Painting red clay on the negative"
            />
        Painting the background of a flower negative with red clay on a four
        bristle brush to block all light. This retains the very bright
        background.
      </div>
         <p>
            I used to draw a lot and I wanted an image that had the same feeling as
            a drawing so I have combined a number of techniques to arrive at that
            feeling. First I chose a silver chloride emulsion paper rather than the
            more ubiquitous silver bromide because the resulting image would be
            softer. I have used filters to subtract the color of the flower
            rendering the flower white.
      </p>
         <p>
            After this, I hand painted out the background on the negative using a
            four-bristle brush a process that takes awhile! The result is a white
            flower on a white background which is rather flat in appearance so next
            I split toned the paper to give a three dimensional effect to it. Toning
            normally changes the color of the entire image but because of the
            emulsion that I am using this color change can be stopped at any time. I
            stop this process when just the darker parts change to a reddish brown
            leaving the lightest parts silver hence the name split toned.
      </p>
         <p>
            <a href="/galleries/flowers/" title="View the Flowers gallery">
               View the Flowers gallery
        </a>
        .
      </p>
      </div>
   );
};

const Camera = () => {
   return (
      <div className="technique_popup">
         <div class="right">
            <img
               src={require("../img/web/deardorff.jpg")}
               alt='My Deardorff 8"&times;10" camera'
            />
         </div>
         <p>
            I use two cameras. The first of these is a Deardorff to photograph the
            flowers because it is more capable of making extensive adjustments
            necessary for close-ups. The lens is a 180mm f5.6 Schneider macro called
            a Makro–Symmar designed for extreme close-ups.
      </p>
         <br class="spacer" />
         <div class="right">
            <img
               src={require("../img/web/ikeda.jpg")}
               alt='My Deardorff 8"&times;10" camera'
            />
         </div>
         <p>
            My field camera is an Ikeda, which is extremely compact and lightweight.
            It has been my companion for thirty years now!
      </p>
      </div>
   );
};

const Making_Prints = () => {
   return (
      <div className="technique_popup">
         <p>
            Normally photographs are made by placing a small negative in an enlarger
            in order to make a picture large enough for people to see. The problem
            with this method is that the closer you view the image, the fuzzier it
            becomes.
      </p>
         <p>
            What you see is a silver print made from an 8"&times;10" negative rather
            than from a much smaller negative. The value of using such a large
            negative is apparent the closer you view the image. Instead of getting
            fuzzier the image now keeps getting clearer. The reason lies in the fact
            that the larger the negative, the more information that can be stored on
            it.
      </p>
         <p>
            To make such a large negative requires a large camera. I use an{" "}
            <NavLink to="/techniques/cameras">
               8"&times;10" large format field camera
        </NavLink>
        , the type used around the turn of the century. It is made of wood with
        a large leather bellows. To focus, you get under a black cloth and view
        the image upside down on an etched glass plate at the back of the
        camera.
      </p>
         <p>
            Instead of using single negatives in printing, I make unsharp masks. An
            unsharp mask is an 8"&times;10" sheet of film which are pin registered
            to the negative. On top of that sandwich of film, using frosted drafting
            film; I make additional burning and dodging masks. These are made by
            drawing on the film to hold back light in some areas while cutting holes
            in the film to allow light in others to pass. This results in much
            precision when making burns and dodges. Detail is what interests me.
            Printing through a sandwich of both negative and positive film results
            in increased sharpness and expanded tonal range.
      </p>
         <p>
            If you would like more detail on the process, I encourage you to read{" "}
            <NavLink to="/techniques/making_prints/details">
               a more technical overview
        </NavLink>{" "}
        of the processes I use.
      </p>
      </div>
   );
};

const Making_Prints_Details = () => {
   return (
      <div className="technique_popup">
         <p>
            When making prints, I usually incorporate a number of techniques beyond
            the use of a single negative.
      </p>
         <h3>Unsharp Masking</h3>
         <p>
            An unsharp mask accomplishes two tasks: it has the visual effect that
            you have flooded the scene with light by increasing local contrast
            throughout the contrast range. Second there is a pronounced increase in
            sharpness. In comparison, even a contact print looks fuzzy!
      </p>
         <div class="right">
            <img
               src={require("../img/web/pin_registration.jpg")}
               alt="My pin registration device"
            />
        A pin registration device is used to make two precision holes on the
        very edge of both the negative and positive unsharp mask.
      </div>
         <p>
            This is made in complete darkness. I start by placing the negative on
            top of a new sheet of film; both have two precision holes punched at the
            edge of the sheets of film. The emulsions are facing the same direction
            so that the image falling on the new sheet will be slightly larger and a
            bit out of focus which is why it is called an unsharp mask. Now using
            the enlarger as a light source, I send light onto this new film. After
            development, I have a thin positive. Both can now be assembled into a
            &ldquo;sandwich&rdquo; by lining up the holes for perfect registration.
      </p>
         <h3>Dodging Mask</h3>
         <p>
            A dodging mask is both a precise and repeatable way to lighten areas
            within an image. The usual way of doing this is to jiggle an object in
            the light path while printing. However, that is, at best, a rather crude
            method.
      </p>
         <div class="left">
            <img
               src={require("../img/web/dodging_mask.jpg")}
               alt="Drawing a dodging mask"
            />
         </div>
         <p>
            A plastic double-sided frosted drafting sheet is placed over the
            sandwich of negative and unsharp mask. The illumination from the light
            box clearly shows areas that need to be dodged. This is accomplished by
            adding density using pencils. A precision dodging mask is the result.
            Areas to be burned are outlined to indicate where cutouts are to be made
            allowing more light to pass and creating a burning mask.
      </p>
         <h3>Burning Mask</h3>
         <div class="right">
            <img
               src={require("../img/web/burning_mask.jpg")}
               alt="Cutting out a burning mask"
            />
         </div>
         <p>
            A burning mask can be made by cutting holes in the same frosted plastic
            used to make the dodging mask. This replaces the older technique of
            using a card with a hole cut into it. The latter is more imprecise so
            that light often spills over onto adjacent areas creating unwanted
            effects.
      </p>
         <p>
            Cutting the plastic double sided drafting sheet to make the precision
            burns. The sheet already contains the precision dodges made by adding
            density to the frosted plastic.
      </p>
         <h3>Assembly</h3>
         <p>
            To assemble all the above to print a picture think of the printing
            process as painting with light. What I have done so far with the use of
            the different masks is to much more precisely control the light that
            lands on the photographic paper.
      </p>
         <div class="left">
            <img
               src={require("../img/web/negative_carrier.jpg")}
               alt="A view of negative carrier"
            />
         </div>
         <p>
            Here we have the negative carrier with the sandwich of negative and
            unsharp mask over a sheet of anti-Newton glass.
      </p>
         <br class="spacer" />
         <div class="right">
            <img
               src={require("../img/web/diffusion_plastic.jpg")}
               alt="The carrier with diffusion plastic added"
            />
         </div>
         <p>
            A <sup>1</sup>/<sub>8</sub>" frosted diffusion plastic is placed over
        the sandwich of negative and unsharp mask. Next, the dodging/burning
        mask will be taped on top. The light box will ensure correct
        registration before taping it in place.
      </p>
         <br class="spacer" />
         <div class="left">
            <img
               src={require("../img/web/assembly.jpg")}
               alt="The final assembly"
            />
         </div>
         <p>
            A sheet of <sup>1</sup>/<sub>8</sub>" frosted diffusion plastic is place
        over the sandwich of negative and unsharp mask, the dodging/burning mask
        is now taped on top.
      </p>
      </div>
   );
};

const Enlarger = () => {
   return (
      <div className="technique_popup">
         <p>
            The enlarger that I use is one that I have built using a few items that
            I salvaged from an Elwood enlarger - mainly just the rack and pinion
            mechanism. The black box is made of wood and contains the filter drawer
            and negative carrier. Seated on the top is an aluminum box housing a
            homemade 12"&times;12" coldhead lamp.
      </p>
         <p>
            Here are the views of my enlarger head as well as a description for each
            picture.
      </p>
         <h3>Left Side</h3>
         <div class="right">
            <img
               src={require("../img/web/enlarger_left.jpg")}
               alt="The left side of the enlarger"
            />
         </div>
         <p>
            The bottom board of the black box is U-shaped with the negative
            carrier&rsquo;s end protruding. You can see my large relay mounted to a
            floor joist. The two vertical over exposed strips are meter sticks used
            to record the height settings for both the bellows and column for each
            print.
      </p>
         <h3>Right Side</h3>
         <div class="left">
            <img
               src={require("../img/web/enlarger_right.jpg")}
               alt="The right side of the enlarger"
            />
         </div>
         <p>
            The filter drawer is closed and you can see how the filter door is
            constructed.
      </p>
         <h3>Front &amp; Door Open</h3>
         <div class="rightw">
            <img
               src={require("../img/web/enlarger_front.jpg")}
               alt="The front side of the enlarger"
            />
         </div>
         <p>
            The front filter drawer is open and you can see the felt attached to the
            inside of the door used as a light trap and cushion when the door is
            closed. The center cutout in the front filter opening is so I can easily
            get my remaining fingers in there to remove the 300mm&times;300mm
        filter. You can see the bottom of my light is about <sup>3</sup>/
        <sub>4</sub> inch above the filter and well down into the wooden box
        which has black weather stripping on it&rsquo;s inside to trap light and
        make it very easy to remove the light head . You can&rsquo;t see it but
        there is a channel in the sides of the box where the filter slides in. I
        made these by simply running the saw blade into the wooden sides boards
        about <sup>1</sup>/<sub>8</sub> of an inch. I went to a hobby shop and
        purchased some piano wire. A single wire was taped to the back of each
        filter which keeps the filter from sagging as you side it into place.
        The two white strips that you see at both sides of the opening are glow
        in the dark strips of tape which make it a snap to find the channels to
        put the filter in when you are changing filters in the dark.
      </p>
         <h3>Underside</h3>
         <div class="leftw">
            <img
               src={require("../img/web/enlarger_bottom.jpg")}
               alt="The underside of the enlarger"
            />
         </div>
         <p>
            There are 4 slotted bolts that hold the whole head to the bottom. I
            removed these and used the same 4 bolts to attach the wooden top. You
            can see the handle and counter weight used to operate the door. No
            catches or fasteners are used to jar the negative when I opened the
            filter drawer to change filters just the counter weight holds the door
            tightly shut.
      </p>
      </div>
   );
};

const Ground_Glass = () => {
   return (
      <div className="technique_popup">
         <p>
            This article was{" "}
            <a
               href="http://www.phototechmag.com/previous-articles/2003/mj-dokas/dokas.html"
               title="Original publication"
            >
               originally published
        </a>{" "}
        in the May/June 2003 issue of{" "}
            <a href="http://www.phototechmag.com/">Photo Techniques</a> magazine.
      </p>
         <p>
            There I was assembling my camera gear for a trip to photograph the
            interiors of English cathedrals only to find a small crack in the ground
            glass of my 8"&times;10". Since I didn&rsquo;t want to chance it, I
            tried to find a replacement. After an unsuccessful search, I decided to
            make my own. I remembered a recent article on view camera restoration by
            David Hoyt in which he mentioned using 280-400 grit carbide to make your
            own ground glass. I was familiar with lens grinding, having ground my
            own 8" reflective telescope mirror in high school. I even had on hand
            some of the grits packed away in the attic.
      </p>
         <p>
            I visited my local glass supplier to find some glass similar to my
            cracked ground glass to use as a blank. I found out that the glass used
        in the familiar ground glass is <sup>1</sup>/<sub>3</sub> thinner than
        our single strength window glass. It was identified as &ldquo;European
        glass&rdquo; which isn’t imported to the States. Both had the same 70%
        silica and iron impurity content as evidenced by their identical green
        color. There was a corresponding difference in weight: my cracked ground
        glass weighed in at 7oz while the replacement US glass blank tipped the
        scale at 9.8oz. I reasoned that the extra thickness meant extra strength
        so I convinced myself that it was insurance that I could afford to live
        with; after all, an 8"&times;10" inch sheet of glass that is only about
        2mm thick is easy to break.
      </p>
         <h3>Grinding The Blank</h3>
         <div class="rightw">
            <img
               src={require("../img/web/ground_glass.jpg")}
               alt="Grinding the glass"
            />
         </div>
         <p>
            To grind the blank, you will need a small &frac14;" thick sheet of glass
            to use as the grinding tool. Mine measured 4&frac14;"&times;4&frac14;".
            The exact size is not important but it should fit comfortably between
            your thumb and fingertips. It is a good idea to have both sheets of
            glass seamed to avoid cutting your hands while working with it. This is
            accomplished by running fine emery cloth across the outer edges. After
            laying out some newspaper, to your flat work surface, place the blank
            onto it. You need a small glass of water and teaspoon. You will also
            need another dry teaspoon to measure out your dry grinding grit. It is
        quite simple to do the grind: measure out about <sup>1</sup>/
        <sub>8</sub> teaspoon of grit onto the center of your blank with a
        similar amount of water and start grinding. You want to move your hand
        in a circular motion making about two inch circles while moving your
        hand in a large circle around the blank. In the case of an 8"&times;10"
        blank it will be necessary to also make a pass across the center. You
        will have to frequently add just a little more water. When you need to
        add water it will become obvious. The tool will be harder to move as the
        water evaporates and the two sheets of glass begin to stick together.
        Less frequently, you will need another charge of grit. The sound (as
        well as the thinning color) of the grinding slurry will be your prompt
        as to when you need to add more grinding material. With just a little
        practice this will all fall into place for you. You can see how you are
        doing by running a stream of water over the blank to flush all the grit
        from it and allow it to dry. You will see exactly where you need to
        spend more time grinding. It is finished when the dry sheet is uniformly
        white in appearance. How long it takes is dependent on the size of the
        grit you use and what the grit is made of.
      </p>
         <h3>The Secret Is In The Grit</h3>
         <p>
            I choose #380 grit as my starting point since it is on the finer side of
            the recommendation in Hoyt&rsquo;s article. It took less than 10 minutes
            to complete but upon trying it out I found it to be too coarse. I
            clearly needed finer grit, which I obtained from Willmann-Bell, Inc.
            (phone: 800-825-7827). They sell optical grade abrasive at a very
            reasonable price. The woman at the other end of the line was most
            helpful and delivery was in three days. The next grade I tried was their
            #500 silicon carbide, which will yield a ground glass very similar to
            the one that came with your camera. By this time I was hooked and wanted
            to find out if I could make a better one than the original equipment.
      </p>
         <p>
            One interesting thing that I discovered while using #380 or #500 grit is
            that chips of glass that are removed from the blank. This happens
            because these grits are made of silicon carbide, which is only slightly
            softer than diamonds. As you grind with these extremely sharp and hard
            grits, chips of glass flake out much like what happens to flint in arrow
            making. These chips, more than anything else, are what the problem is
            with normal ground glass. The chips are quite large and break up the
            image on the ground glass making it difficult to focus. If you look at
            your ground glass with a 22&times; loupe you can easily see them, as
            they appear dark surrounded by a white fine background. If it
            weren&rsquo;t for these chips a ground glass would be much better. The
            problem is that these chips are very smooth and are at different angles,
            which cause the surface of the image to look speckled, that is to say,
            dark spots surrounded by light spots. The dark spots are these chips
            while the light spots are the ground surface of the glass. Because of
            this, when you use an 8&times; loupe, it is difficult to focus as they
            create a mosaic out of the image.
      </p>
         <p>
            Now if instead you use white aluminum oxide you can avoid these chips
            entirely. This abrasive is much softer and super fine resulting in an
            incredibly fine smooth surface that is all white. It is almost invisible
            with a 22&times; loupe. The only problem is that it takes longer to
            make.
      </p>
         <table>
            <tr>
               <th colspan="4">ABRASIVE SIZE RELATIONSHIPS</th>
            </tr>
            <tr>
               <td>Grit Type</td>
               <td>Grit Size</td>
               <td>Inches</td>
               <td>Micro Size</td>
            </tr>
            <tr class="even">
               <td>Si Carbide</td>
               <td>40</td>
               <td>0.0258</td>
               <td>684</td>
            </tr>
            <tr class="odd">
               <td>Si Carbide</td>
               <td>60</td>
               <td>0.0160</td>
               <td>406</td>
            </tr>
            <tr class="even">
               <td>Si Carbide</td>
               <td>120</td>
               <td>0.0056</td>
               <td>142</td>
            </tr>
            <tr class="odd">
               <td>Si Carbide</td>
               <td>220</td>
               <td>0.0026</td>
               <td>66</td>
            </tr>
            <tr class="even">
               <td>Si Carbide</td>
               <td>320</td>
               <td>0.0013</td>
               <td>32</td>
            </tr>
            <tr class="odd">
               <td>Si Carbide</td>
               <td>500</td>
               <td>0.0007</td>
               <td>16</td>
            </tr>
            <tr class="even">
               <td>Al Oxide</td>
               <td>&nbsp;</td>
               <td>0.0005</td>
               <td>12</td>
            </tr>
            <tr class="odd">
               <td>Al Oxide</td>
               <td>&nbsp;</td>
               <td>0.0002</td>
               <td>5</td>
            </tr>
            <tr class="even">
               <td>Al Oxide</td>
               <td>&nbsp;</td>
               <td>0.0001</td>
               <td>3</td>
            </tr>
         </table>
         <p>
            After studying the size relationship (see chart) I decided to try the
            white aluminum oxide micron grits. Several tries later, I have
            determined the best route is to start with a new blank and begin with
            the 5-micron powder: &ldquo;dust&rdquo; would be more descriptive. This
            will take about an hour. (It would not be a good idea to start with
            silicon carbide because you would have to grind out all the chips and
            these are surprisingly deep.) When you have ground for about 15 minutes
            you will see waves in the glass blank you are working on. Window glass,
            also known as float glass, is made by pouring molten glass on a layer of
            pure molten tin and often you will see wave patterns in the resulting
            glass. By the time you are finished, all of these waves will be ground
            flat. Clean both the tool and the ground glass very carefully several
            times under a stream of water to avoid contamination and do the final
            grind with 3 micron powder for another hour. This is the finest of the
            grinding compounds. It is the last grinding grit when making a telescope
            lens before the polishing stage. This is all worth the effort because
            when you are finished you will have a superior ground glass.
      </p>
         <h3>Why It’s Better To Grind Your Own</h3>
         <p>
            There are several unexpected advantages over original equipment. I set
            up my camera and temporarily placed the old ground glass on the
            camera&rsquo;s back and focused the image and took meter readings using
            my digital Pentax spot meter under a dark cloth. Then I replaced it with
            the original ground glass to compare its readings. Both readings were
            made at the same five-inch distance from the image under the dark cloth.
            It turns out the new ground glass is twice as bright as the original
            ground glass. Cheaper and lighter than purchasing faster lenses! I
            repeated the measurements throughout the day, from bright sun to dusk,
        and the new glass was consistently a full stop to a stop and{" "}
            <sup>1</sup>/<sub>3</sub> brighter. So not only is it sharper and
        brighter but stronger as well.
      </p>
         <p>
            I did notice one other slight advantage. If you use a fresnel lens, as I
            do, the groves of the fennel are less obvious because they are further
            from the image on the ground glass due to the extra 1mm thickness of the
            new glass. This is, however, only a slight improvement, as they
            don&rsquo;t disappear entirely.
      </p>
         <p>
            Vertical and horizontal lines can be drawn directly onto the ground
            surface with pencil. You can even make the lines clear by firmly
            attaching transparent tape to the ground surface. This will greatly
            reduce the light scatter caused by the ground surface and will appear
            darker, but you will still be able to focus. If you use tape, just be
            sure not to allow the tape to reach the edges of the glass, as that
            would space the ground surface one tape thickness further from the
            desired focal plane.
      </p>
         <p>
            Before I leave the subject of broken ground glasses I found that a very
            adequate emergency replacement could be made. Just go to a local
            hardware store and have a glass cut to the proper size. Tape Scotch
            brand Magic tape to one surface of the glass. The tape is frosted and
            will work in a pinch as the ground surface. The image is serviceable but
            has a streaky nature to it. Make sure that the tape runs all the way to
            the edge so that the &rdquo;ground&ldquo; surface is at the proper
            plane.
      </p>
         <p>
            You have your choice of spending 10 minutes to make a ground glass
            similar to what you could purchase or investing about two hours and
            owning one that has more desirable qualities. Users of 4&times;5 cameras
            may benefit the most from having a superior ground glass. Focus is more
            critical for smaller films because any focusing error will be magnified
            more in the enlargements necessary to make prints.
      </p>
      </div>
   );
};

export default Techniques;
