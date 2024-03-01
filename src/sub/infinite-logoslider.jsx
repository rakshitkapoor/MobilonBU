
function Slider(){
  return (
    <div class="absolute bottom-10 w-full overflow-hidden inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul class="flex items-center justify-start [&_li]:mx-8 md:[&_li]:mx-28 [&_img]:max-w-none infinite-scroll">
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
      <ul class="flex items-center justify-start [&_li]:mx-8 md:[&_li]:mx-28 [&_img]:max-w-none infinite-scroll " aria-hidden="true">
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