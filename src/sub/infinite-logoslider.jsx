
function Slider(){
  return (
    <div class="absolute bottom-0 w-full overflow-hidden inline-flex flex-nowrap">
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 md:[&_li]:mx-28 [&_img]:max-w-none infinite-scroll">
          <li>
              <img src="/assets/flutter.png" alt="flutter" className="h-12 md:h-24" />
          </li>
          <li>
              <img src="/assets/reactnative.png" alt="reactnative" className="h-12 md:h-24" />
          </li>
          <li>
              <img src="/assets/java.png" alt="java" className="h-12 md:h-24" />
          </li>
          <li>
              <img src="/assets/kotlin.png" alt="kotlin" className="h-12 md:h-24" />
          </li>
      </ul>
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 md:[&_li]:mx-28 [&_img]:max-w-none infinite-scroll">
          <li>
              <img src="/assets/flutter.png" alt="flutter" className="h-12 md:h-24" />
          </li>
          <li>
              <img src="/assets/reactnative.png" alt="reactnative" className="h-12 md:h-24" />
          </li>
          <li>
              <img src="/assets/java.png" alt="java" className="h-12 md:h-24" />
          </li>
          <li>
              <img src="/assets/kotlin.png" alt="kotlin" className="h-12 md:h-24" />
          </li>
      </ul>                  
  </div>
  )
}
export default Slider;