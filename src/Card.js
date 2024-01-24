import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
function Card(props){
    return (
<div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal text-center">{props.data.plan}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title text-center">{props.data.price}</h1>
            <ul class="list-unstyled mt-3 mb-4">
              {
                props.data.features.map((feature,index)=>{
                 return feature.enable?(<li>
                  <FontAwesomeIcon icon={faCheck}/>
                  {feature.name}
                  </li>):(<li style={{textDecoration:"line-through"}}><FontAwesomeIcon icon={faTimes}/>{feature.name}
                  </li>)              
                 })
                }        
              </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary ">BUTTON</button>
          </div>
        </div>
      </div>

    );
}
export default Card;