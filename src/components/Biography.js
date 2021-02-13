import React from "react";

const biography = () => {
	return (
		<div className="biography">
			<h2>Biography</h2>
			<div className="rightw">
				<img src={require("../img/web/biography.jpg")} alt="Dick Dokas" />
			</div>
			<p>
				Dick Dokas is a retired career teacher who has taught photography,
				computer graphics, and biology. His early interest in art centered on
				drawing, which he pursued seriously well into adulthood before turning
				to photography.
      </p>
			<p>
				Among the teachers at workshops that he has attended were Ansel Adams,
				Howard Bond, Morley Baer, John Sexton and Judy Dater. His long
				association with Howard Bond has had the greatest impact on his
				photography.
      </p>
			<p>
				His contributions to photographic education continue as juror, speaker,
				and workshop instructor. He has taught many workshops with Howard Bond
				in the United States and Canada. He has authored articles in national
        publications.{" "}
				<a href="http://www.phototechmag.com/">Photo Techniques</a> featured his
        photographs in 2003 as well as this year in the magazine.
      </p>
			<p>
				He has exhibited in the U.S. and in Europe in one-man and group
				exhibitions, and his photographs are in numerous collections around the
				world, including the Ford collection.
      </p>
			<p>
				Landscapes and flowers are the most frequently chosen subjects for his
				8"&times;10" camera which is the only film size he uses. Most prints are
				made with unsharp masks to obtain detail beyond what 8"&times;10"
				negatives normally provide. In order to make precision burns and dodges
				Ross masks are frequently utilized.
      </p>
		</div>
	);
};

export default biography;
