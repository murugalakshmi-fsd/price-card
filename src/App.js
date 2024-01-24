import './App.css';
import './Style.css'
import Card from './Card.js';
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const pricecarddetails=[{
    plan:"FREE",
    price:"$0/month",
    features:[
      {
        icon:faCheck,
        name:"Single users",
        enable:true,
      },
      {
        icon:faCheck,
        name:"50GB Storage",
        enable:true,
      },
      {
        icon:faCheck,
        name:"Unlimited public projects",
       enable:true,
      },
       {
        icon:faCheck,
        name:"Community Access",
        enable:true,
       },
       {
        icon:faTimes,
        name:"Unlimited Private Projects",
        enable:false,
       },
       {
        icon:faTimes,
        name:"Dedicated phone support",
        enable:false,
       },
       {
        icon:faTimes,
        name:"Free Subdomain",
        enable:false,
       },
      {
        icon:faTimes,
        name:"Monthly status Report",
        enable:false,
      }
     ]},
     {
     plan:"PLUS",
     price:"$9/month",
     features:[
       {
        icon:faCheck, 
        name:"5 users",
         enable:true,
       },
       {
        icon:faCheck,
        name:"50GB Storage",
         enable:true,
       },
       {
        icon:faCheck,
        name:"Unlimited public projects",
        enable:true,
       },
        {
          icon:faCheck,
          name:"Community Access",
         enable:true,
        },
        {
          icon:faCheck,
          name:"Unlimited Private Projects",
         enable:true,
        },
        {
          icon:faCheck,
          name:"Dedicated phone support",
         enable:true,
        },
        {
          icon:faCheck,
          name:"Free Subdomain",
         enable:true,
        },
       {
        icon:faTimes, 
        name:"Monthly status Report",
         enable:false,
       }
      ]},
      {
        plan:"PRO",
        price:"$49/month",
        features:[
          {
            icon:faCheck,
            name:"Single users",
            enable:true,
          },
          {
            icon:faCheck,
            name:"50GB Storage",
            enable:true,
          },
          {
            icon:faCheck,
            name:"Unlimited public projects",
           enable:true,
          },
           {
            icon:faCheck,
            name:"Community Access",
            enable:true,
           },
           {
            icon:faCheck,
            name:"Unlimited Private Projects",
            enable:true,
           },
           {
            icon:faCheck,
            name:"Dedicated phone support",
            enable:true,
           },
           {
            icon:faCheck,
            name:"Free Subdomain",
            enable:true,
           },
          {
            icon:faCheck,
            name:"Monthly status Report",
            enable:true,
          }
         ]
         },
       
  ]
  return (
  <div className="container">
    <div className="row">
      {
        pricecarddetails.map((card)=>{
          return <Card data={card}/>
        })
      }
                 
    </div>
  </div>
  );
}

export default App; 
