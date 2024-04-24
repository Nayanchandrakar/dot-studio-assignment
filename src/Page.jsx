export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-8 w-full h-full ">
      <section className="my-16">
        {/* heading  */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold custom_font text-center">
          <span className="text-blue-800">Why&nbsp;</span>
          Choose Us
        </h1>

        {/* grid section  */}
        <div className="grid grid-cols-1 min-[840px]:grid-cols-2 mt-10 gap-6">
          {/* div img 1 */}
          <div className="w-full h-[21rem] rounded-lg  overflow-hidden relative group">
            <img
              src="./image/img1.jpg"
              alt="bg-image"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black">
              <div className="text-white  absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] custom_font transition-all duration-[350ms] group-hover:opacity-0 opacity-100 group-hover:translate-y-0 max-w-[90%] text-center text-xl md:text-2xl">
                <span className="text-yellow-500 font-semibold">
                  Holistic&nbsp;
                </span>
                Development
              </div>
            </div>

            <div className="bg-[#114A8D]/80  absolute z-10 backdrop-blur-sm flex flex-col overflow-hidden transition-all duration-[350ms] group-hover:duration-300 items-center justify-center gap-3 md:gap-2 bottom-[5%] w-0 h-0 group-hover:h-[90%] group-hover:w-full ">
              <div className="text-white  font-semibold  custom_font transition-all duration-[250ms] delay-0 group-hover:delay-[350ms] translate-y-[1.2rem] opacity-0 group-hover:translate-y-0  group-hover:opacity-100 max-w-[90%] text-center  text-xl md:text-2xl">
                <span className="text-yellow-500 font-semibold">
                  Holistic&nbsp;
                </span>
                Development
              </div>

              <p className="custom_font  text-white transition-all duration-[250ms] delay-0 group-hover:delay-[500ms] translate-y-[1.2rem] opacity-0 group-hover:translate-y-0  group-hover:opacity-100 max-w-[90%] text-center text-sm md:text-base">
                Right Mix of Curricular and Co-Curricular Activities.
              </p>
            </div>
          </div>

          {/* div img 2 */}
          <div className="w-full h-[21rem] rounded-lg overflow-hidden relative group">
            <img
              src="./image/img2.jpg"
              alt="bg-image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black">
              <div className="text-white  absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] custom_font transition-all duration-[350ms] group-hover:opacity-0 opacity-100 group-hover:translate-y-0 w-[90%] text-center text-xl md:text-2xl">
                <span className="text-yellow-500 font-semibold">
                  Proven&nbsp;
                </span>
                and&nbsp;
                <span className="text-yellow-500 font-semibold">
                  Tested&nbsp;
                </span>
                <br />
                Centralized Curriculum
              </div>
            </div>

            <div className="bg-[#114A8D]/80  absolute z-10 backdrop-blur-sm flex flex-col overflow-hidden transition-all duration-[350ms] group-hover:duration-300 items-center justify-center gap-3 md:gap-2 bottom-[5%] w-0 h-0 group-hover:h-[90%] group-hover:w-full ">
              <div className="text-white  font-semibold  custom_font transition-all duration-[250ms] delay-0 group-hover:delay-[350ms] translate-y-[1.2rem] opacity-0 group-hover:translate-y-0  group-hover:opacity-100 max-w-[90%] text-center  text-xl md:text-2xl">
                <span className="text-yellow-500 font-semibold">
                  Proven&nbsp;
                </span>
                and&nbsp;
                <span className="text-yellow-500 font-semibold">
                  Tested&nbsp;
                </span>
                <br />
                Centralized Curriculum
              </div>

              <p className="custom_font  text-white transition-all duration-[250ms] delay-0 group-hover:delay-[500ms] translate-y-[1.2rem] opacity-0 group-hover:translate-y-0  group-hover:opacity-100 max-w-[90%] text-center text-sm md:text-base">
                CBSE school with balanced traditional & contemporary curriculum
                to foster growth in all its students.
              </p>
            </div>
          </div>

          {/* div img 3 */}
          <div className="w-full h-[21rem] rounded-lg overflow-hidden relative group">
            <img
              src="./image/img3.jpg"
              alt="bg-image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black">
              <div className="text-white  absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] custom_font transition-all duration-[350ms] group-hover:opacity-0 opacity-100 group-hover:translate-y-0 max-w-[90%] text-center text-xl md:text-2xl">
                <span className="text-yellow-500 font-semibold">
                  Innovative&nbsp;
                </span>
                and&nbsp;
                <span className="text-yellow-500 font-semibold">
                  Challenging&nbsp;
                </span>
                <br />
                learning Methodologies
              </div>
            </div>

            <div className="bg-[#114A8D]/80  absolute z-10 backdrop-blur-sm flex flex-col overflow-hidden transition-all duration-[350ms] group-hover:duration-300 items-center justify-center gap-3 md:gap-2 bottom-[5%] w-0 h-0 group-hover:h-[90%] group-hover:w-full ">
              <div className="text-white  font-semibold  custom_font transition-all duration-[250ms] delay-0 group-hover:delay-[350ms] translate-y-[1.2rem] opacity-0 group-hover:translate-y-0  group-hover:opacity-100 max-w-[90%] text-center  text-xl md:text-2xl">
                <span className="text-yellow-500 font-semibold">
                  Innovative&nbsp;
                </span>
                and&nbsp;
                <span className="text-yellow-500 font-semibold">
                  Challenging&nbsp;
                </span>
                <br />
                learning Methodologies
              </div>

              <p className="custom_font  text-white transition-all duration-[250ms] delay-0 group-hover:delay-[500ms] translate-y-[1.2rem] opacity-0 group-hover:translate-y-0  group-hover:opacity-100 max-w-[90%] text-center text-sm md:text-base">
                Facilitate excellence through critical thinking and profound
                learning.
              </p>
            </div>
          </div>

          {/* div img 4 */}
          <div className="w-full h-[21rem] rounded-lg overflow-hidden relative group">
            <img
              src="./image/img4.jpg"
              alt="bg-image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black">
              <div className="text-white  absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] custom_font transition-all duration-[350ms] group-hover:opacity-0 opacity-100 group-hover:translate-y-0 max-w-[90%] text-center text-xl md:text-2xl">
                <span className="text-yellow-500 font-semibold">
                  Faculty&nbsp;
                </span>
                Enrichment Program
              </div>
            </div>

            <div className="bg-[#114A8D]/80  absolute z-10 backdrop-blur-sm flex flex-col overflow-hidden transition-all duration-[350ms] group-hover:duration-300 items-center justify-center gap-3 md:gap-2 bottom-[5%] w-0 h-0 group-hover:h-[90%] group-hover:w-full ">
              <div className="text-white  font-semibold  custom_font transition-all duration-[250ms] delay-0 group-hover:delay-[350ms] translate-y-[1.2rem] opacity-0 group-hover:translate-y-0  group-hover:opacity-100 max-w-[90%] text-center  text-xl md:text-2xl">
                <span className="text-yellow-500 font-semibold">
                  Faculty&nbsp;
                </span>
                Enrichment Program
              </div>

              <p className="custom_font  text-white transition-all duration-[250ms] delay-0 group-hover:delay-[500ms] translate-y-[1.2rem] opacity-0 group-hover:translate-y-0  group-hover:opacity-100 max-w-[90%] text-center text-sm md:text-base">
                Regular teacher training and curriculum workshops
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
