import { useState } from "react";

const STATES = [
  { name:"Lagos", cities:["Ikeja","Lekki","Victoria Island","Surulere","Yaba","Ikorodu","Badagry","Epe","Oshodi","Mushin","Alimosho","Agege","Apapa","Gbagada","Magodo"] },
  { name:"FCT Abuja", cities:["Abuja","Gwagwalada","Kuje","Bwari","Lugbe","Zuba","Kubwa","Maitama","Wuse","Garki","Asokoro","Gwarinpa"] },
  { name:"Rivers", cities:["Port Harcourt","Obio-Akpor","Okrika","Bonny","Eleme","Tai","Gokana","Degema","Ahoada"] },
  { name:"Kano", cities:["Kano","Wudil","Gwarzo","Rano","Bichi","Dambatta","Gezawa","Ungogo","Nassarawa"] },
  { name:"Anambra", cities:["Awka","Onitsha","Nnewi","Ekwulobia","Agulu","Ogidi","Obosi","Oba","Ihiala","Aguata"] },
  { name:"Oyo", cities:["Ibadan","Ogbomosho","Oyo","Saki","Iseyin","Eruwa","Lanlate","Igboho","Igbo-Ora"] },
  { name:"Delta", cities:["Asaba","Warri","Sapele","Ughelli","Agbor","Abraka","Ozoro","Kwale","Oleh","Eku"] },
  { name:"Kaduna", cities:["Kaduna","Zaria","Kafanchan","Saminaka","Kagoro","Zonkwa","Lere","Kachia"] },
  { name:"Enugu", cities:["Enugu","Nsukka","Agbani","Oji River","Udi","Awgu","Nkanu","Igbo-Eze"] },
  { name:"Ondo", cities:["Akure","Ondo Town","Owo","Okitipupa","Akungba-Akoko","Ikare-Akoko","Idanre","Ifon","Irele","Ile-Oluji","Ode-Aye","Emure","Oka-Akoko","Okeagbe","Ipele","Supare","Isua","Oba-Ile","Irun-Akoko","Iwaro-Oka","Ute","Igbara-Oke","Igbara-Odo","Odigbo","Ore"] },
  { name:"Edo", cities:["Benin City","Auchi","Ekpoma","Uromi","Ubiaja","Igarra","Igueben","Akoko-Edo","Sabongida-Ora"] },
  { name:"Ogun", cities:["Abeokuta","Sagamu","Ijebu-Ode","Ilaro","Ota","Ifo","Ayetoro","Owode","Ijebu-Igbo"] },
  { name:"Imo", cities:["Owerri","Orlu","Okigwe","Oguta","Mbaise","Mbaitoli","Ideato","Oru East"] },
  { name:"Abia", cities:["Umuahia","Aba","Arochukwu","Ohafia","Isuikwuato","Bende","Ikwuano"] },
  { name:"Cross River", cities:["Calabar","Ikom","Ogoja","Obudu","Obubra","Bekwarra","Etung"] },
  { name:"Benue", cities:["Makurdi","Otukpo","Gboko","Katsina-Ala","Vandeikya","Logo","Ukum"] },
  { name:"Plateau", cities:["Jos","Bukuru","Shendam","Pankshin","Mangu","Langtang","Barkin Ladi"] },
  { name:"Kwara", cities:["Ilorin","Offa","Omu-Aran","Lafiagi","Patigi","Kaiama","Oke-Ode"] },
  { name:"Osun", cities:["Osogbo","Ile-Ife","Ilesa","Ede","Iwo","Ejigbo","Inisa","Modakeke"] },
  { name:"Ekiti", cities:["Ado-Ekiti","Ikere","Oye","Ikole","Emure","Efon","Ijero","Gbonyin"] },
  { name:"Akwa Ibom", cities:["Uyo","Eket","Ikot Ekpene","Oron","Abak","Etinan","Essien Udim"] },
  { name:"Bayelsa", cities:["Yenagoa","Ogbia","Brass","Nembe","Sagbama","Ekeremor"] },
  { name:"Niger", cities:["Minna","Bida","Suleja","Kontagora","Lapai","Agaie","Mokwa"] },
  { name:"Nasarawa", cities:["Lafia","Keffi","Akwanga","Nasarawa","Doma","Wamba","Kokona"] },
  { name:"Kogi", cities:["Lokoja","Okene","Kabba","Idah","Ankpa","Ogaminana","Ajaokuta"] },
  { name:"Ebonyi", cities:["Abakaliki","Afikpo","Onueke","Ezza","Ishielu","Ikwo","Ivo"] },
  { name:"Bauchi", cities:["Bauchi","Azare","Misau","Katagum","Jama'are","Gamawa"] },
  { name:"Gombe", cities:["Gombe","Kaltungo","Billiri","Dukku","Funakaye","Yamaltu"] },
  { name:"Taraba", cities:["Jalingo","Wukari","Bali","Gembu","Zing","Lau","Gassol"] },
  { name:"Adamawa", cities:["Yola","Mubi","Jimeta","Numan","Ganye","Gombi","Hong"] },
  { name:"Borno", cities:["Maiduguri","Biu","Ngala","Gwoza","Damboa","Chibok","Konduga"] },
  { name:"Yobe", cities:["Damaturu","Potiskum","Gashua","Nguru","Buni Yadi","Geidam"] },
  { name:"Jigawa", cities:["Dutse","Hadejia","Gumel","Kazaure","Birnin Kudu","Ringim"] },
  { name:"Katsina", cities:["Katsina","Daura","Funtua","Malumfashi","Mani","Musawa"] },
  { name:"Kebbi", cities:["Birnin Kebbi","Argungu","Yelwa","Zuru","Koko","Bagudo"] },
  { name:"Sokoto", cities:["Sokoto","Bodinga","Dange-Shuni","Gada","Goronyo","Gudu"] },
  { name:"Zamfara", cities:["Gusau","Kaura Namoda","Talata Mafara","Anka","Bakura"] },
];

const CATS = ["Electrician","Plumber","Carpenter","Photographer","Barber","Makeup Artist","Tutor","Graphic Designer","Web Developer","Mechanic","Cleaner","Caterer","Tailor","Phone Repairer","Hair Stylist","Mason"];
const CAT_ICONS = {"Electrician":"⚡","Plumber":"🔧","Carpenter":"🪚","Photographer":"📸","Barber":"✂️","Makeup Artist":"💄","Tutor":"📚","Graphic Designer":"🎨","Web Developer":"💻","Mechanic":"🚗","Cleaner":"🧹","Caterer":"🍳","Tailor":"👗","Phone Repairer":"📱","Hair Stylist":"💈","Mason":"🏗️"};

const PROS = [
  {id:1,name:"Adewale Johnson",role:"Electrician",rating:4.9,jobs:312,city:"Ikeja",state:"Lagos",address:"12 Allen Avenue, Ikeja",verified:true,color:"#1E3A8A",price:"₦5k–₦20k",av:"AJ"},
  {id:2,name:"Ngozi Okafor",role:"Photographer",rating:5.0,jobs:489,city:"Victoria Island",state:"Lagos",address:"5 Adeola Odeku Street, VI",verified:true,color:"#7C3AED",price:"₦30k–₦150k",av:"NO"},
  {id:3,name:"Emeka Obi",role:"Plumber",rating:4.7,jobs:198,city:"Abuja",state:"FCT Abuja",address:"Plot 44 Wuse Zone 5, Abuja",verified:true,color:"#0369A1",price:"₦3k–₦15k",av:"EO"},
  {id:4,name:"Fatima Al-Hassan",role:"Makeup Artist",rating:4.8,jobs:567,city:"Kano",state:"Kano",address:"14 Bompai Road, Kano",verified:true,color:"#BE185D",price:"₦15k–₦80k",av:"FA"},
  {id:5,name:"Chidi Nwosu",role:"Barber",rating:4.6,jobs:1200,city:"Onitsha",state:"Anambra",address:"22 New Market Road, Onitsha",verified:false,color:"#065F46",price:"₦500–₦2k",av:"CN"},
  {id:6,name:"Blessing Eze",role:"Hair Stylist",rating:4.9,jobs:834,city:"Port Harcourt",state:"Rivers",address:"8 Rumuola Road, Port Harcourt",verified:true,color:"#C2410C",price:"₦3k–₦25k",av:"BE"},
  {id:7,name:"Musa Tanko",role:"Mechanic",rating:4.5,jobs:421,city:"Kaduna",state:"Kaduna",address:"3 Kachia Road, Kaduna",verified:true,color:"#0E7490",price:"₦5k–₦50k",av:"MT"},
  {id:8,name:"Amina Bello",role:"Tailor",rating:5.0,jobs:276,city:"Akungba-Akoko",state:"Ondo",address:"7 Ikare Road, Akungba",verified:false,color:"#6D28D9",price:"₦5k–₦40k",av:"AB"},
];

const NOTIFS = [
  {id:1,icon:"✅",title:"Welcome to Nexstaff!",body:"Your account has been created successfully.",time:"Just now",read:false},
  {id:2,icon:"🔍",title:"New client viewed your profile",body:"Someone in Lagos viewed your profile.",time:"2 mins ago",read:false},
  {id:3,icon:"📅",title:"Booking Request",body:"A client wants to book your service for tomorrow.",time:"1 hour ago",read:false},
  {id:4,icon:"⭐",title:"New Review",body:"You received a 5-star review from a recent client.",time:"3 hours ago",read:true},
  {id:5,icon:"💰",title:"Payment Received",body:"₦15,000 has been sent to your account.",time:"Yesterday",read:true},
];

const A="#1E40AF",A2="#3B82F6",BG="#F8FAFF",SUR="#FFFFFF",BDR="#E2E8F0",TXT="#0F172A",MUT="#64748B",FNT="#94A3B8",GRN="#059669",RED="#DC2626",YLW="#D97706";

/* ── LOGO ── */
function Logo({size=32}) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill={A}/>
      <path d="M8 30V12L16 24V12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 24V12L24 30" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="28" cy="14" r="5" fill="#BAE6FD"/>
      <path d="M26 14h4M28 12v4" stroke={A} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function Wordmark({size=18}) {
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:8}}>
      <Logo size={size+12}/>
      <span style={{fontWeight:800,fontSize:size,color:A,letterSpacing:"-0.3px"}}>Nex<span style={{color:TXT}}>staff</span></span>
    </span>
  );
}

/* ── HELPERS ── */
function CityInput({stateObj,value,onChange}) {
  const [custom,setCustom] = useState(false);
  if (!stateObj) return null;
  const inp = {flex:1,background:BG,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"11px 13px",fontSize:14,outline:"none",fontFamily:"inherit"};
  if (custom) return (
    <div style={{marginBottom:12}}>
      <div style={{color:MUT,fontSize:12,marginBottom:4}}>City / Town <span style={{color:FNT}}>(type it in)</span></div>
      <div style={{display:"flex",gap:8}}>
        <input value={value} onChange={e=>onChange(e.target.value)} placeholder="Type your city or village..." style={inp}/>
        <button onClick={()=>{setCustom(false);onChange("");}} style={{background:BG,border:`1.5px solid ${BDR}`,color:MUT,borderRadius:10,padding:"0 12px",cursor:"pointer",fontFamily:"inherit",fontSize:12,whiteSpace:"nowrap"}}>Pick from list</button>
      </div>
    </div>
  );
  return (
    <div style={{marginBottom:12}}>
      <div style={{color:MUT,fontSize:12,marginBottom:4}}>City / Town</div>
      <div style={{display:"flex",gap:8}}>
        <select value={value} onChange={e=>onChange(e.target.value)} style={{...inp,fontFamily:"inherit"}}>
          <option value="">Select city...</option>
          {stateObj.cities.map(c=><option key={c}>{c}</option>)}
        </select>
        <button onClick={()=>setCustom(true)} style={{background:BG,border:`1.5px solid ${BDR}`,color:A,borderRadius:10,padding:"0 12px",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:700,whiteSpace:"nowrap"}}>Not listed?</button>
      </div>
    </div>
  );
}

function ProCard({p}) {
  return (
    <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,padding:18,marginBottom:12,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
      <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
        <div style={{width:48,height:48,borderRadius:"50%",background:p.color+"18",border:`2px solid ${p.color}33`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:p.color,flexShrink:0}}>{p.av}</div>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:3}}>
            <span style={{fontWeight:700,fontSize:15,color:TXT}}>{p.name}</span>
            {p.verified && <span style={{background:"#DCFCE7",color:GRN,border:"1px solid #BBF7D0",borderRadius:20,fontSize:10,fontWeight:700,padding:"2px 8px"}}>✓ VERIFIED</span>}
          </div>
          <div style={{color:MUT,fontSize:12,marginBottom:2}}>{CAT_ICONS[p.role]||"🔨"} {p.role} · {p.city}, {p.state}</div>
          <div style={{color:FNT,fontSize:11,marginBottom:6}}>📍 {p.address}</div>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{color:YLW}}>{"★".repeat(Math.round(p.rating))}</span>
            <span style={{color:YLW,fontWeight:700,fontSize:12}}>{p.rating}</span>
            <span style={{color:FNT,fontSize:11}}>({p.jobs} jobs)</span>
            <span style={{color:A,fontWeight:700,fontSize:12,marginLeft:"auto"}}>{p.price}</span>
          </div>
        </div>
      </div>
      <div style={{display:"flex",gap:8,marginTop:12}}>
        <button style={{background:A,color:"#fff",border:"none",borderRadius:8,padding:"9px 18px",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>Book Now</button>
        <button style={{background:"transparent",color:A,border:`1.5px solid ${A}`,borderRadius:8,padding:"9px 14px",fontWeight:600,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>💬 Chat</button>
      </div>
    </div>
  );
}

/* ── MAP PAGE ── */
function MapPage({setPage}) {
  const [sel,setSel] = useState(null);
  const W=500,H=440,minLat=4.0,maxLat=14.2,minLng=2.5,maxLng=15.0;
  const proj=(lat,lng)=>[((lng-minLng)/(maxLng-minLng))*(W-70)+35,H-(((lat-minLat)/(maxLat-minLat))*(H-70)+35)];
  const coords={Lagos:[6.524,3.379],"FCT Abuja":[9.058,7.495],Rivers:[4.815,7.049],Kano:[11.999,8.592],Anambra:[6.210,7.068],Oyo:[7.388,3.897],Delta:[5.700,5.950],Kaduna:[10.524,7.440],Enugu:[6.442,7.494],Ondo:[7.252,5.195],Edo:[6.338,5.627],Ogun:[7.157,3.347],Imo:[5.485,7.026],Abia:[5.532,7.486],"Cross River":[5.870,8.600],Benue:[7.730,8.539],Plateau:[9.897,8.892],Kwara:[8.497,4.547],Osun:[7.768,4.557],Ekiti:[7.623,5.221],"Akwa Ibom":[5.008,7.850],Bayelsa:[4.920,6.267],Niger:[9.614,6.557],Nasarawa:[8.490,8.520],Kogi:[7.800,6.741],Ebonyi:[6.325,8.116],Bauchi:[10.308,9.844],Gombe:[10.290,11.167],Taraba:[8.899,11.374],Adamawa:[9.333,12.461],Borno:[11.846,13.160],Yobe:[11.747,11.959],Jigawa:[12.252,9.357],Katsina:[12.989,7.615],Kebbi:[12.453,4.198],Sokoto:[13.058,5.246],Zamfara:[12.162,6.661]};
  return (
    <div style={{maxWidth:860,margin:"0 auto",padding:"24px 16px 60px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <button onClick={()=>setPage("home")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MUT}}>←</button>
        <div style={{fontWeight:800,fontSize:20,color:TXT}}>Explore by Location</div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,alignItems:"start"}}>
        <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,padding:16,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
          <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height:"auto"}}>
            <rect width={W} height={H} rx={12} fill="#EFF6FF"/>
            <ellipse cx={250} cy={222} rx={195} ry={168} fill="rgba(30,64,175,0.04)" stroke="rgba(30,64,175,0.1)" strokeWidth={1.5}/>
            {STATES.map(s=>{
              const c=coords[s.name];
              if(!c) return null;
              const [x,y]=proj(c[0],c[1]);
              const isSel=sel===s.name;
              return (
                <g key={s.name} onClick={()=>setSel(isSel?null:s.name)} style={{cursor:"pointer"}}>
                  {isSel&&<circle cx={x} cy={y} r={18} fill="rgba(30,64,175,0.12)"/>}
                  <circle cx={x} cy={y} r={isSel?11:8} fill={isSel?A:SUR} stroke={isSel?A:"#93C5FD"} strokeWidth={isSel?2:1.5}/>
                  <text x={x} y={y+0.5} textAnchor="middle" dominantBaseline="middle" fontSize={isSel?6:5} fontWeight={700} fill={isSel?"#fff":A}>{s.name.slice(0,3).toUpperCase()}</text>
                  {isSel&&<text x={x} y={y-18} textAnchor="middle" fontSize={9} fontWeight={700} fill={A}>{s.name}</text>}
                </g>
              );
            })}
          </svg>
          <div style={{textAlign:"center",color:MUT,fontSize:12,marginTop:8}}>{sel?`${sel} selected`:"Tap any state"}</div>
        </div>
        <div>
          {!sel?(
            <div style={{display:"flex",flexDirection:"column",gap:6,maxHeight:440,overflowY:"auto"}}>
              {STATES.map(s=>(
                <div key={s.name} onClick={()=>setSel(s.name)} style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:10,padding:"10px 14px",cursor:"pointer",display:"flex",justifyContent:"space-between"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor=A}
                  onMouseLeave={e=>e.currentTarget.style.borderColor=BDR}>
                  <span style={{fontWeight:600,fontSize:13,color:TXT}}>{s.name}</span>
                  <span style={{color:FNT,fontSize:11}}>{s.cities.length} cities</span>
                </div>
              ))}
            </div>
          ):(
            <div>
              <button onClick={()=>setSel(null)} style={{background:"none",border:"none",color:A,fontWeight:700,fontSize:13,cursor:"pointer",marginBottom:12,padding:0}}>← All States</button>
              <div style={{fontWeight:800,fontSize:18,color:TXT,marginBottom:4}}>{sel}</div>
              <div style={{color:MUT,fontSize:13,marginBottom:14}}>Capital: {STATES.find(s=>s.name===sel)?.cities[0]}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:16}}>
                {STATES.find(s=>s.name===sel)?.cities.map(c=>(
                  <span key={c} style={{background:`${A}10`,color:A,border:`1px solid ${A}25`,borderRadius:20,padding:"4px 10px",fontSize:11,fontWeight:600}}>{c}</span>
                ))}
              </div>
              <button onClick={()=>setPage("search")} style={{width:"100%",background:A,color:"#fff",border:"none",borderRadius:10,padding:"12px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>Find Pros in {sel} →</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── ADD CARD MODAL ── */
function AddCardModal({onClose}) {
  const [type,setType] = useState("card");
  const [num,setNum] = useState("");
  const [name,setName] = useState("");
  const [expiry,setExpiry] = useState("");
  const [cvv,setCvv] = useState("");
  const [bank,setBank] = useState("");
  const [accNum,setAccNum] = useState("");
  const [accName,setAccName] = useState("");
  const [done,setDone] = useState(false);
  const inp={width:"100%",background:BG,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"12px 14px",fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:12,boxSizing:"border-box"};

  if (done) return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:SUR,borderRadius:20,padding:32,textAlign:"center",maxWidth:300,width:"100%",boxShadow:"0 8px 32px rgba(0,0,0,0.15)"}}>
        <div style={{fontSize:48,marginBottom:12}}>✅</div>
        <div style={{color:A,fontWeight:800,fontSize:18,marginBottom:6}}>Payment Method Added!</div>
        <div style={{color:MUT,fontSize:13,marginBottom:20}}>Your details are saved securely via Paystack.</div>
        <button onClick={onClose} style={{background:A,color:"#fff",border:"none",borderRadius:10,padding:"12px 32px",fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>Done</button>
      </div>
    </div>
  );

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{background:SUR,borderRadius:20,padding:28,width:"100%",maxWidth:380,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 8px 32px rgba(0,0,0,0.2)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <div style={{fontWeight:800,fontSize:17,color:TXT}}>Add Payment Method</div>
          <button onClick={onClose} style={{background:"#F1F5F9",border:"none",color:MUT,width:30,height:30,borderRadius:"50%",cursor:"pointer",fontSize:14}}>✕</button>
        </div>
        <div style={{display:"flex",gap:8,marginBottom:20}}>
          {[["card","💳 Card"],["bank","🏦 Bank Account"]].map(([v,l])=>(
            <button key={v} onClick={()=>setType(v)} style={{flex:1,background:type===v?`${A}12`:BG,color:type===v?A:MUT,border:`1.5px solid ${type===v?A:BDR}`,borderRadius:10,padding:"10px 8px",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{l}</button>
          ))}
        </div>
        {type==="card" ? (
          <>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>Card Number</div>
            <input value={num} onChange={e=>setNum(e.target.value)} placeholder="1234 5678 9012 3456" maxLength={19} style={inp}/>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>Cardholder Name</div>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name on card" style={inp}/>
            <div style={{display:"flex",gap:10}}>
              <div style={{flex:1}}>
                <div style={{color:MUT,fontSize:12,marginBottom:4}}>Expiry</div>
                <input value={expiry} onChange={e=>setExpiry(e.target.value)} placeholder="MM/YY" maxLength={5} style={inp}/>
              </div>
              <div style={{flex:1}}>
                <div style={{color:MUT,fontSize:12,marginBottom:4}}>CVV</div>
                <input value={cvv} onChange={e=>setCvv(e.target.value)} placeholder="123" maxLength={3} type="password" style={inp}/>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>Bank Name</div>
            <input value={bank} onChange={e=>setBank(e.target.value)} placeholder="e.g. First Bank, GTBank, UBA" style={inp}/>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>Account Number</div>
            <input value={accNum} onChange={e=>setAccNum(e.target.value)} placeholder="10-digit account number" maxLength={10} style={inp}/>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>Account Name</div>
            <input value={accName} onChange={e=>setAccName(e.target.value)} placeholder="Account holder name" style={inp}/>
          </>
        )}
        <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:10,padding:"10px 14px",marginBottom:16,fontSize:12,color:GRN}}>
          🔒 Secured by Paystack · Your details are encrypted
        </div>
        <button onClick={()=>setDone(true)} style={{width:"100%",background:A,color:"#fff",border:"none",borderRadius:10,padding:"14px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>Add Payment Method</button>
      </div>
    </div>
  );
}

/* ── LIVE CHAT WIDGET ── */
function LiveChat({onClose}) {
  const [msg,setMsg] = useState("");
  const [msgs,setMsgs] = useState([{from:"support",text:"Hi! Welcome to Nexstaff Support 👋 We're available 24/7. How can we help you today?",time:"now"}]);
  const send = () => {
    if (!msg.trim()) return;
    const newMsgs = [...msgs,{from:"user",text:msg,time:"now"}];
    setMsgs(newMsgs);
    setMsg("");
    setTimeout(()=>setMsgs(m=>[...m,{from:"support",text:"Thanks for your message! A support agent will respond shortly. Our average response time is under 5 minutes.",time:"now"}]),1200);
  };
  return (
    <div style={{position:"fixed",bottom:80,right:16,width:320,background:SUR,borderRadius:20,boxShadow:"0 8px 32px rgba(0,0,0,0.2)",zIndex:200,border:`1px solid ${BDR}`,overflow:"hidden"}}>
      <div style={{background:`linear-gradient(135deg,${A},${A2})`,padding:"14px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{color:"#fff",fontWeight:700,fontSize:14}}>Nexstaff Support</div>
          <div style={{color:"#BAE6FD",fontSize:11}}>🟢 Online · Available 24/7</div>
        </div>
        <button onClick={onClose} style={{background:"rgba(255,255,255,0.2)",border:"none",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",fontSize:14}}>✕</button>
      </div>
      <div style={{height:220,overflowY:"auto",padding:12,display:"flex",flexDirection:"column",gap:8}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.from==="user"?"flex-end":"flex-start"}}>
            <div style={{background:m.from==="user"?A:"#F1F5F9",color:m.from==="user"?"#fff":TXT,borderRadius:12,padding:"8px 12px",maxWidth:"80%",fontSize:13,lineHeight:1.5}}>{m.text}</div>
          </div>
        ))}
      </div>
      <div style={{padding:10,borderTop:`1px solid ${BDR}`,display:"flex",gap:8}}>
        <input value={msg} onChange={e=>setMsg(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Type a message..." style={{flex:1,background:BG,border:`1px solid ${BDR}`,color:TXT,borderRadius:10,padding:"9px 12px",fontSize:13,outline:"none",fontFamily:"inherit"}}/>
        <button onClick={send} style={{background:A,color:"#fff",border:"none",borderRadius:10,padding:"9px 14px",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13}}>Send</button>
      </div>
    </div>
  );
}

/* ── SERVICES PAGE ── */
function ServicesPage({setPage,user}) {
  const [showForm,setShowForm] = useState(false);
  const [services,setServices] = useState([]);
  const [form,setForm] = useState({category:"",customCat:"",price:"",description:"",images:[],videos:[]});
  const [customCat,setCustomCat] = useState(false);
  const upd=(k,v)=>setForm(f=>({...f,[k]:v}));
  const inp={width:"100%",background:BG,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"11px 13px",fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:12,boxSizing:"border-box"};

  const handleMedia = (e,type) => {
    const files = Array.from(e.target.files);
    files.forEach(file=>{
      const reader = new FileReader();
      reader.onload = ev => {
        setForm(f=>({...f,[type]:[...f[type],{url:ev.target.result,name:file.name}]}));
      };
      reader.readAsDataURL(file);
    });
  };

  const addService = () => {
    const cat = customCat ? form.customCat : form.category;
    if (!cat) return;
    setServices(s=>[...s,{...form,category:cat,id:Date.now()}]);
    setForm({category:"",customCat:"",price:"",description:"",images:[],videos:[]});
    setCustomCat(false);
    setShowForm(false);
  };

  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
        <button onClick={()=>setPage("settings")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MUT}}>←</button>
        <div style={{fontWeight:800,fontSize:20,color:TXT,flex:1}}>My Services</div>
        <button onClick={()=>setShowForm(!showForm)} style={{background:A,color:"#fff",border:"none",borderRadius:8,padding:"8px 16px",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>+ Add</button>
      </div>

      {showForm && (
        <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,padding:20,marginBottom:16,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
          <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:14}}>Add New Service</div>

          <div style={{color:MUT,fontSize:12,marginBottom:4}}>Service Category</div>
          {!customCat ? (
            <div style={{display:"flex",gap:8,marginBottom:12}}>
              <select value={form.category} onChange={e=>upd("category",e.target.value)} style={{...inp,flex:1,marginBottom:0}}>
                <option value="">Select category...</option>
                {CATS.map(c=><option key={c}>{c}</option>)}
              </select>
              <button onClick={()=>setCustomCat(true)} style={{background:BG,border:`1.5px solid ${BDR}`,color:A,borderRadius:10,padding:"0 12px",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:700,whiteSpace:"nowrap"}}>Not listed?</button>
            </div>
          ) : (
            <div style={{display:"flex",gap:8,marginBottom:12}}>
              <input value={form.customCat} onChange={e=>upd("customCat",e.target.value)} placeholder="Type your service category" style={{...inp,flex:1,marginBottom:0}}/>
              <button onClick={()=>setCustomCat(false)} style={{background:BG,border:`1.5px solid ${BDR}`,color:MUT,borderRadius:10,padding:"0 12px",cursor:"pointer",fontFamily:"inherit",fontSize:12,whiteSpace:"nowrap"}}>Pick list</button>
            </div>
          )}

          <div style={{color:MUT,fontSize:12,marginBottom:4}}>Price Range</div>
          <input value={form.price} onChange={e=>upd("price",e.target.value)} placeholder="e.g. ₦5,000 – ₦20,000" style={inp}/>

          <div style={{color:MUT,fontSize:12,marginBottom:4}}>Description</div>
          <textarea value={form.description} onChange={e=>upd("description",e.target.value)} placeholder="Describe this service..." rows={3} style={{...inp,resize:"vertical"}}/>

          {/* Image upload */}
          <div style={{color:MUT,fontSize:12,marginBottom:8}}>Portfolio Images (optional)</div>
          <label style={{display:"block",background:BG,border:`1.5px dashed ${BDR}`,borderRadius:10,padding:"14px",textAlign:"center",cursor:"pointer",marginBottom:10}}>
            <div style={{fontSize:24,marginBottom:4}}>🖼️</div>
            <div style={{fontSize:12,color:MUT}}>Tap to upload images of your work</div>
            <input type="file" accept="image/*" multiple onChange={e=>handleMedia(e,"images")} style={{display:"none"}}/>
          </label>
          {form.images.length>0 && (
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
              {form.images.map((img,i)=>(
                <div key={i} style={{width:64,height:64,borderRadius:8,overflow:"hidden",border:`1px solid ${BDR}`}}>
                  <img src={img.url} alt={img.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                </div>
              ))}
            </div>
          )}

          {/* Video upload */}
          <div style={{color:MUT,fontSize:12,marginBottom:8}}>Portfolio Videos (optional)</div>
          <label style={{display:"block",background:BG,border:`1.5px dashed ${BDR}`,borderRadius:10,padding:"14px",textAlign:"center",cursor:"pointer",marginBottom:14}}>
            <div style={{fontSize:24,marginBottom:4}}>🎥</div>
            <div style={{fontSize:12,color:MUT}}>Tap to upload videos of your work</div>
            <input type="file" accept="video/*" multiple onChange={e=>handleMedia(e,"videos")} style={{display:"none"}}/>
          </label>
          {form.videos.length>0 && (
            <div style={{color:GRN,fontSize:12,marginBottom:10}}>✅ {form.videos.length} video{form.videos.length>1?"s":""} uploaded</div>
          )}

          <div style={{display:"flex",gap:8}}>
            <button onClick={()=>setShowForm(false)} style={{flex:1,background:BG,color:MUT,border:`1px solid ${BDR}`,borderRadius:10,padding:"12px",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>Cancel</button>
            <button onClick={addService} style={{flex:2,background:A,color:"#fff",border:"none",borderRadius:10,padding:"12px",fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>Save Service</button>
          </div>
        </div>
      )}

      {services.length===0 && !showForm ? (
        <div style={{textAlign:"center",padding:"60px 0"}}>
          <div style={{fontSize:48,marginBottom:16}}>🛠</div>
          <div style={{fontWeight:700,fontSize:17,color:TXT,marginBottom:6}}>No services yet</div>
          <div style={{color:MUT,fontSize:13,marginBottom:20}}>Add the services you offer so clients can find you</div>
          <button onClick={()=>setShowForm(true)} style={{background:A,color:"#fff",border:"none",borderRadius:10,padding:"12px 28px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>+ Add Your First Service</button>
        </div>
      ) : services.map(s=>(
        <div key={s.id} style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:14,padding:16,marginBottom:10,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div style={{flex:1}}>
              <div style={{fontWeight:700,fontSize:14,color:TXT,marginBottom:3}}>{CAT_ICONS[s.category]||"🔨"} {s.category}</div>
              <div style={{color:A,fontSize:13,fontWeight:600,marginBottom:4}}>{s.price}</div>
              {s.description && <div style={{color:MUT,fontSize:12,marginBottom:6}}>{s.description.slice(0,60)}{s.description.length>60?"...":""}</div>}
              {s.images.length>0 && (
                <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:4}}>
                  {s.images.slice(0,3).map((img,i)=>(
                    <div key={i} style={{width:48,height:48,borderRadius:6,overflow:"hidden",border:`1px solid ${BDR}`}}>
                      <img src={img.url} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                    </div>
                  ))}
                </div>
              )}
              {s.videos.length>0 && <div style={{color:MUT,fontSize:11}}>🎥 {s.videos.length} video{s.videos.length>1?"s":""}</div>}
            </div>
            <button onClick={()=>setServices(services.filter(x=>x.id!==s.id))} style={{background:"none",border:"none",color:RED,fontSize:12,cursor:"pointer",fontFamily:"inherit",flexShrink:0}}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── BOOKINGS PAGE ── */
function BookingsPage({setPage}) {
  const bookings=[
    {id:1,pro:"Adewale Johnson",service:"Electrician",date:"June 5, 2025",time:"10:00 AM",status:"confirmed",price:"₦15,000"},
    {id:2,pro:"Ngozi Okafor",service:"Photographer",date:"June 12, 2025",time:"2:00 PM",status:"pending",price:"₦80,000"},
  ];
  const sc=(s)=>s==="confirmed"?GRN:s==="pending"?YLW:RED;
  const sb=(s)=>s==="confirmed"?"#DCFCE7":s==="pending"?"#FEF9C3":"#FEF2F2";
  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
        <button onClick={()=>setPage("settings")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MUT}}>←</button>
        <div style={{fontWeight:800,fontSize:20,color:TXT}}>My Bookings</div>
      </div>
      {bookings.map(b=>(
        <div key={b.id} style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,padding:18,marginBottom:12,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}>
            <div>
              <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:2}}>{b.pro}</div>
              <div style={{color:MUT,fontSize:13}}>{b.service}</div>
            </div>
            <span style={{background:sb(b.status),color:sc(b.status),borderRadius:20,fontSize:11,fontWeight:700,padding:"3px 10px",height:"fit-content",textTransform:"capitalize"}}>{b.status}</span>
          </div>
          <div style={{display:"flex",gap:16,marginBottom:12}}>
            <span style={{fontSize:12,color:MUT}}>📅 {b.date}</span>
            <span style={{fontSize:12,color:MUT}}>🕐 {b.time}</span>
            <span style={{fontSize:12,color:A,fontWeight:700}}>{b.price}</span>
          </div>
          <div style={{display:"flex",gap:8}}>
            <button style={{flex:1,background:A,color:"#fff",border:"none",borderRadius:8,padding:"9px",fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>View Details</button>
            {b.status==="pending"&&<button style={{flex:1,background:"#FEF2F2",color:RED,border:`1px solid #FECACA`,borderRadius:8,padding:"9px",fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>Cancel</button>}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── HELP PAGE ── */
function HelpPage({setPage,setShowChat}) {
  const faqs=[
    {q:"How do I book a professional?",a:"Search for the service you need, find a professional, tap 'Book Now', choose a date and time, and confirm your booking."},
    {q:"How do payments work?",a:"Payments are processed securely through Paystack. Money is held safely until the job is done, then released to the professional."},
    {q:"How do I become verified?",a:"Complete your profile and submit for verification. Our team will review within 24–48 hours."},
    {q:"Can I cancel a booking?",a:"Yes, from My Bookings. Cancellations 24 hours before are free of charge."},
    {q:"How do I leave a review?",a:"After a completed booking, you will be prompted to rate and review the professional."},
  ];
  const [open,setOpen] = useState(null);
  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
        <button onClick={()=>setPage("settings")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MUT}}>←</button>
        <div style={{fontWeight:800,fontSize:20,color:TXT}}>Help & Support</div>
      </div>
      <div style={{background:`linear-gradient(135deg,${A},${A2})`,borderRadius:16,padding:20,color:"#fff",marginBottom:20,textAlign:"center"}}>
        <div style={{fontSize:32,marginBottom:8}}>👋</div>
        <div style={{fontWeight:800,fontSize:16,marginBottom:4}}>How can we help you?</div>
        <div style={{fontSize:13,opacity:0.85}}>Browse FAQs or contact our support team</div>
      </div>
      <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:12}}>Frequently Asked Questions</div>
      <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:20}}>
        {faqs.map((f,i)=>(
          <div key={i} onClick={()=>setOpen(open===i?null:i)} style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:12,overflow:"hidden",cursor:"pointer"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 16px"}}>
              <div style={{fontWeight:600,fontSize:13,color:TXT,flex:1,paddingRight:10}}>{f.q}</div>
              <div style={{color:FNT,fontSize:18,transform:open===i?"rotate(90deg)":"none",transition:"transform 0.2s"}}>›</div>
            </div>
            {open===i&&<div style={{padding:"0 16px 14px",paddingTop:0,fontSize:13,color:MUT,lineHeight:1.7,borderTop:`1px solid ${BDR}`,paddingTop:12}}>{f.a}</div>}
          </div>
        ))}
      </div>
      <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,padding:20,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
        <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:14}}>Contact Support</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          <div style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:BG,borderRadius:10}}>
            <div style={{width:36,height:36,borderRadius:10,background:`${A}12`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>📧</div>
            <div><div style={{fontWeight:600,fontSize:13,color:TXT}}>Email Us</div><div style={{fontSize:12,color:MUT}}>support@nexstaff.com</div></div>
          </div>
          <div onClick={()=>setShowChat(true)} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:BG,borderRadius:10,cursor:"pointer"}}>
            <div style={{width:36,height:36,borderRadius:10,background:`${A}12`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>💬</div>
            <div style={{flex:1}}><div style={{fontWeight:600,fontSize:13,color:TXT}}>Live Chat</div><div style={{fontSize:12,color:GRN}}>🟢 Available 24/7 · Tap to chat now</div></div>
            <div style={{color:FNT}}>›</div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:BG,borderRadius:10}}>
            <div style={{width:36,height:36,borderRadius:10,background:`${A}12`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>📞</div>
            <div><div style={{fontWeight:600,fontSize:13,color:TXT}}>Call Us</div><div style={{fontSize:12,color:MUT}}>+234 800 NEXSTAFF</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── TERMS PAGE ── */
function TermsPage({setPage}) {
  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
        <button onClick={()=>setPage("settings")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MUT}}>←</button>
        <div style={{fontWeight:800,fontSize:20,color:TXT}}>Terms & Privacy Policy</div>
      </div>
      {[
        {title:"1. Acceptance of Terms",body:"By using Nexstaff, you agree to these terms. Nexstaff is a marketplace connecting customers with local professionals."},
        {title:"2. User Accounts",body:"You must provide accurate information. You are responsible for keeping your password secure. Nexstaff reserves the right to suspend accounts that violate our policies."},
        {title:"3. Payments",body:"All payments are processed securely through Paystack. Nexstaff charges a 5-10% commission on completed transactions."},
        {title:"4. Professional Verification",body:"Verified professionals have been reviewed by our team. Always check reviews before booking."},
        {title:"5. Privacy Policy",body:"We collect your name, email, phone and location to provide our services. We never sell your data to third parties. Your data is stored securely."},
        {title:"6. Contact",body:"For questions, contact us at support@nexstaff.com"},
      ].map(s=>(
        <div key={s.title} style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:14,padding:18,marginBottom:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"}}>
          <div style={{fontWeight:700,fontSize:14,color:TXT,marginBottom:8}}>{s.title}</div>
          <div style={{fontSize:13,color:MUT,lineHeight:1.7}}>{s.body}</div>
        </div>
      ))}
      <div style={{color:FNT,fontSize:11,textAlign:"center",marginTop:8}}>Last updated: June 2025 · Nexstaff Technologies Ltd</div>
    </div>
  );
}

/* ── PRIVACY PAGE ── */
function PrivacyPage({setPage}) {
  const [twoFA,setTwoFA] = useState(false);
  const [alerts,setAlerts] = useState(true);
  const inp={width:"100%",background:BG,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"11px 13px",fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:10,boxSizing:"border-box"};
  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
        <button onClick={()=>setPage("settings")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MUT}}>←</button>
        <div style={{fontWeight:800,fontSize:20,color:TXT}}>Privacy & Security</div>
      </div>
      <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,overflow:"hidden",marginBottom:14,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
        {[["Two-Factor Authentication","Extra security for your account",twoFA,setTwoFA],["Login Alerts","Get notified of new sign-ins",alerts,setAlerts]].map(([label,sub,val,set],i)=>(
          <div key={label} style={{display:"flex",alignItems:"center",gap:14,padding:"16px 18px",borderBottom:i===0?`1px solid ${BDR}`:"none"}}>
            <div style={{flex:1}}>
              <div style={{fontWeight:600,fontSize:14,color:TXT}}>{label}</div>
              <div style={{fontSize:12,color:MUT}}>{sub}</div>
            </div>
            <div onClick={()=>set(!val)} style={{width:44,height:24,borderRadius:12,background:val?A:BDR,cursor:"pointer",position:"relative",transition:"background 0.2s"}}>
              <div style={{position:"absolute",top:2,left:val?22:2,width:20,height:20,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}}/>
            </div>
          </div>
        ))}
      </div>
      <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,padding:20,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
        <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:14}}>Change Password</div>
        <input type="password" placeholder="Current Password" style={inp}/>
        <input type="password" placeholder="New Password" style={inp}/>
        <input type="password" placeholder="Confirm New Password" style={inp}/>
        <button style={{width:"100%",background:A,color:"#fff",border:"none",borderRadius:10,padding:"13px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>Update Password</button>
      </div>
    </div>
  );
}

/* ── PAYMENT PAGE ── */
function PaymentPage({setPage,onAddCard}) {
  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
        <button onClick={()=>setPage("settings")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MUT}}>←</button>
        <div style={{fontWeight:800,fontSize:20,color:TXT}}>Payment</div>
      </div>
      <div style={{background:`linear-gradient(135deg,${A},${A2})`,borderRadius:18,padding:24,color:"#fff",marginBottom:16}}>
        <div style={{fontSize:12,opacity:0.8,marginBottom:8}}>WALLET BALANCE</div>
        <div style={{fontSize:32,fontWeight:800,marginBottom:4}}>₦0.00</div>
        <div style={{fontSize:12,opacity:0.7}}>Powered by Paystack</div>
      </div>
      <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,padding:20,marginBottom:14,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
        <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:14}}>Payment Methods</div>
        <div style={{textAlign:"center",padding:"16px 0",marginBottom:12}}>
          <div style={{fontSize:36,marginBottom:8}}>💳</div>
          <div style={{color:MUT,fontSize:13,marginBottom:16}}>No payment methods added yet</div>
        </div>
        <button onClick={onAddCard} style={{width:"100%",background:A,color:"#fff",border:"none",borderRadius:10,padding:"13px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>+ Add Card / Bank Account</button>
      </div>
      <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,padding:20,marginBottom:14,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
        <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:12}}>How You Receive Money</div>
        {[["💰","Customer pays in app","Secure payment via Paystack"],["📊","Nexstaff takes 5%","Small platform commission"],["🏦","Rest goes to your bank","Direct transfer to your account"]].map(([icon,title,sub])=>(
          <div key={title} style={{display:"flex",gap:12,alignItems:"center",marginBottom:12}}>
            <div style={{width:36,height:36,borderRadius:10,background:`${A}10`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{icon}</div>
            <div><div style={{fontWeight:600,fontSize:13,color:TXT}}>{title}</div><div style={{fontSize:12,color:MUT}}>{sub}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── NOTIFICATIONS PAGE ── */
function NotificationsPage({setPage,notifs,setNotifs}) {
  const unread=notifs.filter(n=>!n.read).length;
  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <button onClick={()=>setPage("settings")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MUT}}>←</button>
        <div style={{fontWeight:800,fontSize:20,color:TXT,flex:1}}>Notifications</div>
        {unread>0&&<button onClick={()=>setNotifs(notifs.map(n=>({...n,read:true})))} style={{background:"none",border:"none",color:A,fontSize:13,fontWeight:600,cursor:"pointer"}}>Mark all read</button>}
      </div>
      {unread>0&&<div style={{background:`${A}0F`,border:`1px solid ${A}25`,borderRadius:12,padding:"10px 14px",marginBottom:16,fontSize:13,color:A,fontWeight:600}}>🔔 {unread} unread notification{unread>1?"s":""}</div>}
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {notifs.map(n=>(
          <div key={n.id} onClick={()=>setNotifs(notifs.map(x=>x.id===n.id?{...x,read:true}:x))} style={{background:n.read?SUR:`${A}06`,border:`1px solid ${n.read?BDR:`${A}20`}`,borderRadius:14,padding:16,cursor:"pointer",display:"flex",gap:12,alignItems:"flex-start"}}>
            <div style={{width:42,height:42,borderRadius:12,background:`${A}12`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{n.icon}</div>
            <div style={{flex:1}}>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{fontWeight:n.read?600:700,fontSize:14,color:TXT,marginBottom:3}}>{n.title}</div>
                {!n.read&&<div style={{width:8,height:8,borderRadius:"50%",background:A,flexShrink:0,marginTop:4}}/>}
              </div>
              <div style={{color:MUT,fontSize:12,lineHeight:1.5,marginBottom:4}}>{n.body}</div>
              <div style={{color:FNT,fontSize:11}}>{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── PROFILE PAGE ── */
function ProfilePage({user,setUser,setPage}) {
  const [form,setForm] = useState({name:user.name||"",email:user.email||"",phone:user.phone||"",bio:user.bio||"",state:user.state||"",city:user.city||"",address:user.address||"",dp:user.dp||null});
  const [saved,setSaved] = useState(false);
  const upd=(k,v)=>setForm(f=>({...f,[k]:v}));
  const stateObj=STATES.find(s=>s.name===form.state);
  const inp={width:"100%",background:BG,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"11px 13px",fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:12,boxSizing:"border-box"};
  const handleDp=e=>{const file=e.target.files[0];if(!file)return;const r=new FileReader();r.onload=ev=>upd("dp",ev.target.result);r.readAsDataURL(file);};
  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
        <button onClick={()=>setPage("settings")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MUT}}>←</button>
        <div style={{fontWeight:800,fontSize:20,color:TXT}}>My Profile</div>
      </div>
      <div style={{textAlign:"center",marginBottom:28}}>
        <div style={{position:"relative",display:"inline-block"}}>
          <div style={{width:100,height:100,borderRadius:"50%",background:`${A}15`,border:`3px solid ${A}30`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto",overflow:"hidden"}}>
            {form.dp?<img src={form.dp} alt="dp" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:<span style={{fontSize:36,fontWeight:800,color:A}}>{(form.name||"U")[0]}</span>}
          </div>
          <label style={{position:"absolute",bottom:0,right:0,background:A,borderRadius:"50%",width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",border:"2px solid #fff"}}>
            <span style={{color:"#fff",fontSize:14}}>📷</span>
            <input type="file" accept="image/*" onChange={handleDp} style={{display:"none"}}/>
          </label>
        </div>
        <div style={{color:MUT,fontSize:12,marginTop:8}}>Tap camera to change photo</div>
      </div>
      <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,padding:20,marginBottom:14,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
        <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:14}}>Personal Information</div>
        {[["Full Name","name","Your full name"],["Email Address","email","your@email.com"]].map(([label,key,ph])=>(
          <div key={key}><div style={{color:MUT,fontSize:12,marginBottom:4}}>{label}</div><input value={form[key]} onChange={e=>upd(key,e.target.value)} placeholder={ph} style={inp}/></div>
        ))}
        <div style={{color:MUT,fontSize:12,marginBottom:4}}>Phone Number</div>
        <div style={{position:"relative",marginBottom:12}}>
          <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:MUT,fontSize:13,fontWeight:600}}>+234</span>
          <input value={form.phone} onChange={e=>upd("phone",e.target.value)} placeholder="Phone number" style={{...inp,paddingLeft:56,marginBottom:0}}/>
        </div>
        <div style={{color:MUT,fontSize:12,marginBottom:4}}>Bio</div>
        <textarea value={form.bio} onChange={e=>upd("bio",e.target.value)} placeholder="Tell people about yourself..." rows={3} style={{...inp,resize:"vertical"}}/>
      </div>
      <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,padding:20,marginBottom:20,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
        <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:14}}>Location</div>
        <div style={{color:MUT,fontSize:12,marginBottom:4}}>State</div>
        <select value={form.state} onChange={e=>{upd("state",e.target.value);upd("city","");}} style={inp}>
          <option value="">Select state...</option>
          {STATES.map(s=><option key={s.name}>{s.name}</option>)}
        </select>
        <CityInput stateObj={stateObj} value={form.city} onChange={v=>upd("city",v)}/>
        <div style={{color:MUT,fontSize:12,marginBottom:4}}>Street Address</div>
        <input value={form.address} onChange={e=>upd("address",e.target.value)} placeholder="e.g. 12 Allen Avenue, Ikeja" style={inp}/>
      </div>
      <button onClick={()=>{setUser({...user,...form});setSaved(true);setTimeout(()=>setSaved(false),2000);}} style={{width:"100%",background:saved?GRN:A,color:"#fff",border:"none",borderRadius:12,padding:"14px",fontWeight:800,fontSize:16,cursor:"pointer",fontFamily:"inherit",transition:"background 0.3s"}}>
        {saved?"✓ Saved!":"Save Changes"}
      </button>
    </div>
  );
}

/* ── SETTINGS PAGE ── */
function SettingsPage({user,setUser,setPage,setAuth}) {
  const menu=[
    {icon:"👤",label:"Profile",sub:"Edit your personal information",page:"profile"},
    {icon:"💳",label:"Payment",sub:"Manage payments & transactions",page:"payment"},
    {icon:"🔔",label:"Notifications",sub:"View your alerts",page:"notifications"},
    {icon:"🔒",label:"Privacy & Security",sub:"Password and security",page:"privacy"},
    {icon:"📅",label:"My Bookings",sub:"View booking history",page:"bookings"},
    {icon:"🛠",label:"My Services",sub:"Manage your listings",page:"services"},
    {icon:"❓",label:"Help & Support",sub:"Get help from our team",page:"help"},
    {icon:"📋",label:"Terms & Privacy Policy",sub:"Read our policies",page:"terms"},
  ];
  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      <div style={{background:`linear-gradient(135deg,${A},${A2})`,borderRadius:20,padding:24,marginBottom:24,color:"#fff",display:"flex",gap:16,alignItems:"center"}}>
        <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(255,255,255,0.2)",border:"3px solid rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,fontWeight:800,overflow:"hidden",flexShrink:0}}>
          {user.dp?<img src={user.dp} alt="dp" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:(user.name||"U")[0]}
        </div>
        <div>
          <div style={{fontWeight:800,fontSize:18}}>{user.name||"My Account"}</div>
          <div style={{fontSize:13,opacity:0.85}}>{user.email||""}</div>
          {user.city&&user.state&&<div style={{fontSize:12,opacity:0.7,marginTop:2}}>📍 {user.city}, {user.state}</div>}
        </div>
      </div>
      <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:16,overflow:"hidden",boxShadow:"0 1px 4px rgba(0,0,0,0.06)",marginBottom:16}}>
        {menu.map((item,i)=>(
          <div key={item.label} onClick={()=>setPage(item.page)} style={{display:"flex",alignItems:"center",gap:14,padding:"16px 18px",borderBottom:i<menu.length-1?`1px solid ${BDR}`:"none",cursor:"pointer",background:SUR}}
            onMouseEnter={e=>e.currentTarget.style.background=BG}
            onMouseLeave={e=>e.currentTarget.style.background=SUR}>
            <div style={{width:40,height:40,borderRadius:12,background:`${A}12`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{item.icon}</div>
            <div style={{flex:1}}>
              <div style={{fontWeight:600,fontSize:14,color:TXT}}>{item.label}</div>
              <div style={{fontSize:12,color:MUT}}>{item.sub}</div>
            </div>
            <div style={{color:FNT,fontSize:18}}>›</div>
          </div>
        ))}
      </div>
      <button onClick={()=>{setUser(null);setPage("home");}} style={{width:"100%",background:"#FEF2F2",color:RED,border:`1.5px solid #FECACA`,borderRadius:12,padding:"14px",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>
        🚪 Log Out
      </button>
    </div>
  );
}

/* ── ONBOARDING PAGE ── */
function OnboardingPage({onDone}) {
  const [step,setStep] = useState(1);
  const [form,setForm] = useState({category:"",customCat:"",state:"",city:"",address:"",phone:"",price:"",experience:"",bio:""});
  const [customCat,setCustomCat] = useState(false);
  const [submitted,setSubmitted] = useState(false);
  const upd=(k,v)=>setForm(f=>({...f,[k]:v}));
  const stateObj=STATES.find(s=>s.name===form.state);
  const inp={width:"100%",background:BG,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"11px 13px",fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:12,boxSizing:"border-box"};
  const cat = customCat ? form.customCat : form.category;

  if (submitted) return (
    <div style={{minHeight:"100vh",background:BG,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:SUR,borderRadius:20,padding:36,textAlign:"center",maxWidth:360,width:"100%",boxShadow:"0 4px 24px rgba(0,0,0,0.08)"}}>
        <div style={{fontSize:56,marginBottom:16}}>🎉</div>
        <div style={{color:A,fontWeight:800,fontSize:22,marginBottom:8}}>Profile Submitted!</div>
        <div style={{color:MUT,fontSize:14,lineHeight:1.7,marginBottom:24}}>Your profile is under review. Once verified you will appear in search results for clients in <strong style={{color:TXT}}>{form.city}, {form.state}</strong>.</div>
        <button onClick={onDone} style={{background:A,color:"#fff",border:"none",borderRadius:10,padding:"13px 32px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>Go to Home</button>
      </div>
    </div>
  );

  return (
    <div style={{minHeight:"100vh",background:BG,padding:"32px 16px"}}>
      <div style={{maxWidth:480,margin:"0 auto"}}>
        <div style={{marginBottom:24}}><Wordmark/></div>
        <div style={{color:MUT,fontSize:13,marginBottom:24}}>Set up your professional profile</div>
        <div style={{display:"flex",gap:6,marginBottom:28}}>{[1,2,3].map(s=><div key={s} style={{flex:1,height:5,borderRadius:4,background:s<=step?A:BDR}}/>)}</div>

        {step===1 && (
          <div>
            <div style={{fontWeight:700,fontSize:17,color:TXT,marginBottom:4}}>What service do you offer?</div>
            <div style={{color:MUT,fontSize:13,marginBottom:16}}>Select your main category</div>
            {!customCat ? (
              <div style={{display:"flex",gap:8,marginBottom:16}}>
                <div style={{flex:1,display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                  {CATS.map(c=>(
                    <button key={c} onClick={()=>upd("category",c)} style={{background:form.category===c?`${A}12`:SUR,color:form.category===c?A:TXT,border:`1.5px solid ${form.category===c?A:BDR}`,borderRadius:12,padding:"11px 8px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",textAlign:"left"}}>
                      {CAT_ICONS[c]||"🔨"} {c}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <input value={form.customCat} onChange={e=>upd("customCat",e.target.value)} placeholder="Type your service category" style={inp}/>
            )}
            <button onClick={()=>setCustomCat(!customCat)} style={{background:"none",border:"none",color:A,fontSize:13,fontWeight:600,cursor:"pointer",marginBottom:16,padding:0}}>
              {customCat?"← Back to category list":"Can't find your category? Type it →"}
            </button>
            <button onClick={()=>cat&&setStep(2)} style={{width:"100%",background:cat?A:"#E2E8F0",color:cat?"#fff":MUT,border:"none",borderRadius:12,padding:"14px",fontWeight:800,fontSize:15,cursor:cat?"pointer":"default",fontFamily:"inherit"}}>Next →</button>
          </div>
        )}

        {step===2 && (
          <div>
            <div style={{fontWeight:700,fontSize:17,color:TXT,marginBottom:4}}>Where are you based?</div>
            <div style={{color:MUT,fontSize:13,marginBottom:16}}>Clients will find you by location</div>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>State</div>
            <select value={form.state} onChange={e=>{upd("state",e.target.value);upd("city","");}} style={inp}>
              <option value="">Select your state...</option>
              {STATES.map(s=><option key={s.name}>{s.name}</option>)}
            </select>
            <CityInput stateObj={stateObj} value={form.city} onChange={v=>upd("city",v)}/>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>Street Address</div>
            <input value={form.address} onChange={e=>upd("address",e.target.value)} placeholder="e.g. 7 Ikare Road, Akungba" style={inp}/>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>setStep(1)} style={{flex:1,background:SUR,color:MUT,border:`1px solid ${BDR}`,borderRadius:12,padding:"14px",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>← Back</button>
              <button onClick={()=>form.state&&form.city&&form.address&&setStep(3)} style={{flex:2,background:form.state&&form.city&&form.address?A:"#E2E8F0",color:form.state&&form.city&&form.address?"#fff":MUT,border:"none",borderRadius:12,padding:"14px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>Next →</button>
            </div>
          </div>
        )}

        {step===3 && (
          <div>
            <div style={{fontWeight:700,fontSize:17,color:TXT,marginBottom:4}}>About you</div>
            <div style={{color:MUT,fontSize:13,marginBottom:16}}>Help clients know what to expect</div>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>Phone Number</div>
            <div style={{position:"relative",marginBottom:12}}>
              <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:MUT,fontSize:13,fontWeight:600}}>+234</span>
              <input value={form.phone} onChange={e=>upd("phone",e.target.value)} placeholder="Phone number" style={{...inp,paddingLeft:56,marginBottom:0}}/>
            </div>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>Price Range</div>
            <input value={form.price} onChange={e=>upd("price",e.target.value)} placeholder="e.g. ₦5,000 – ₦20,000" style={inp}/>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>Years of Experience</div>
            <select value={form.experience} onChange={e=>upd("experience",e.target.value)} style={inp}>
              <option value="">Select...</option>
              {["Less than 1 year","1–2 years","3–5 years","6–10 years","10+ years"].map(o=><option key={o}>{o}</option>)}
            </select>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>Bio</div>
            <textarea value={form.bio} onChange={e=>upd("bio",e.target.value)} placeholder="Describe your skills and experience..." rows={3} style={{...inp,resize:"vertical"}}/>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>setStep(2)} style={{flex:1,background:SUR,color:MUT,border:`1px solid ${BDR}`,borderRadius:12,padding:"14px",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>← Back</button>
              <button onClick={()=>setSubmitted(true)} style={{flex:2,background:A,color:"#fff",border:"none",borderRadius:12,padding:"14px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>🚀 Submit Profile</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── AUTH MODAL ── */
function AuthModal({mode,onClose,onDone,onProviderSignup}) {
  const [tab,setTab] = useState(mode);
  const [step,setStep] = useState(1);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [pass,setPass] = useState("");
  const [type,setType] = useState("customer");
  const [done,setDone] = useState(false);
  const inp={width:"100%",background:BG,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"11px 13px",fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:10,boxSizing:"border-box"};
  const handleDone=()=>{if(type==="provider"){onProviderSignup({name,email,phone});}else{onDone({name,email,phone});}};

  if (done) return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:SUR,borderRadius:20,padding:32,textAlign:"center",maxWidth:320,width:"100%",boxShadow:"0 8px 32px rgba(0,0,0,0.15)"}}>
        <div style={{fontSize:48,marginBottom:12}}>🎉</div>
        <div style={{color:A,fontWeight:800,fontSize:20,marginBottom:6}}>Welcome to Nexstaff!</div>
        <div style={{color:MUT,fontSize:13,marginBottom:20}}>{type==="provider"?"Let's set up your professional profile.":"Your account is ready."}</div>
        <button onClick={handleDone} style={{background:A,color:"#fff",border:"none",borderRadius:10,padding:"12px 32px",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>{type==="provider"?"Set Up Profile →":"Get Started"}</button>
      </div>
    </div>
  );

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(4px)"}} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{background:SUR,borderRadius:20,padding:28,width:"100%",maxWidth:380,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 8px 32px rgba(0,0,0,0.15)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <Wordmark size={16}/>
          <button onClick={onClose} style={{background:"#F1F5F9",border:"none",color:MUT,width:30,height:30,borderRadius:"50%",cursor:"pointer",fontSize:14}}>✕</button>
        </div>
        <div style={{display:"flex",background:BG,borderRadius:10,padding:4,marginBottom:20,border:`1px solid ${BDR}`}}>
          {["login","signup"].map(t=>(
            <button key={t} onClick={()=>{setTab(t);setStep(1);}} style={{flex:1,background:tab===t?A:"transparent",color:tab===t?"#fff":MUT,border:"none",borderRadius:8,padding:"9px",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>{t==="login"?"Log In":"Sign Up"}</button>
          ))}
        </div>
        <button onClick={()=>setDone(true)} style={{width:"100%",background:SUR,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"11px",display:"flex",alignItems:"center",justifyContent:"center",gap:10,cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:600,marginBottom:14,boxSizing:"border-box"}}>
          <svg width="17" height="17" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>
          Continue with Google
        </button>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
          <div style={{flex:1,height:1,background:BDR}}/><span style={{color:FNT,fontSize:11}}>or with email</span><div style={{flex:1,height:1,background:BDR}}/>
        </div>
        {tab==="login" && (
          <>
            <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={inp}/>
            <input placeholder="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)} style={inp}/>
            <div style={{textAlign:"right",marginBottom:14}}><span style={{color:A,fontSize:12,cursor:"pointer",fontWeight:600}}>Forgot password?</span></div>
            <button onClick={()=>setDone(true)} style={{width:"100%",background:A,color:"#fff",border:"none",borderRadius:10,padding:"13px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>Log In</button>
          </>
        )}
        {tab==="signup" && (
          <>
            <div style={{display:"flex",gap:6,marginBottom:14}}>
              {[["customer","👤 Need services"],["provider","🛠 Offer services"]].map(([v,l])=>(
                <button key={v} onClick={()=>setType(v)} style={{flex:1,background:type===v?`${A}12`:BG,color:type===v?A:MUT,border:`1.5px solid ${type===v?A:BDR}`,borderRadius:10,padding:"9px 6px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{l}</button>
              ))}
            </div>
            {step===1 && (
              <>
                <input placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} style={inp}/>
                <input placeholder="Email address" value={email} onChange={e=>setEmail(e.target.value)} style={inp}/>
                <div style={{position:"relative",marginBottom:10}}>
                  <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:MUT,fontSize:13,fontWeight:600}}>+234</span>
                  <input placeholder="Phone number" value={phone} onChange={e=>setPhone(e.target.value)} style={{...inp,paddingLeft:56,marginBottom:0}}/>
                </div>
                <button onClick={()=>setStep(2)} style={{width:"100%",background:A,color:"#fff",border:"none",borderRadius:10,padding:"13px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit",marginTop:6}}>Next →</button>
              </>
            )}
            {step===2 && (
              <>
                <input placeholder="Create password" type="password" value={pass} onChange={e=>setPass(e.target.value)} style={inp}/>
                <div style={{color:FNT,fontSize:11,marginBottom:14,lineHeight:1.6}}>By signing up you agree to Nexstaff's Terms of Service and Privacy Policy.</div>
                <div style={{display:"flex",gap:8}}>
                  <button onClick={()=>setStep(1)} style={{flex:1,background:BG,color:MUT,border:`1px solid ${BDR}`,borderRadius:10,padding:"13px",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>← Back</button>
                  <button onClick={()=>setDone(true)} style={{flex:2,background:A,color:"#fff",border:"none",borderRadius:10,padding:"13px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>Create Account</button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN APP
══════════════════════════════════════ */
export default function App() {
  const [page,setPage] = useState("home");
  const [auth,setAuth] = useState(null);
  const [user,setUser] = useState(null);
  const [search,setSearch] = useState("");
  const [selState,setSelState] = useState("");
  const [selCity,setSelCity] = useState("");
  const [showOnboarding,setShowOnboarding] = useState(false);
  const [notifs,setNotifs] = useState(NOTIFS);
  const [showAddCard,setShowAddCard] = useState(false);
  const [showChat,setShowChat] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);

  const stateObj=STATES.find(s=>s.name===selState);
  const unread=notifs.filter(n=>!n.read).length;
  const ss={background:SUR,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"10px 12px",fontSize:13,outline:"none",fontFamily:"inherit"};

  const results=PROS.filter(p=>{
    const q=search.toLowerCase();
    return (!q||p.role.toLowerCase().includes(q)||p.name.toLowerCase().includes(q))
      &&(!selState||p.state===selState)
      &&(!selCity||p.city===selCity);
  });

  const nav=(p)=>{setPage(p);setMenuOpen(false);};

  if (showOnboarding) return <OnboardingPage onDone={()=>{setShowOnboarding(false);nav("home");}}/>;
  if (page==="profile") return <><ProfilePage user={user||{}} setUser={setUser} setPage={nav}/>{showChat&&<LiveChat onClose={()=>setShowChat(false)}/>}</>;
  if (page==="settings") return <><SettingsPage user={user||{}} setUser={setUser} setPage={nav} setAuth={setAuth}/>{showChat&&<LiveChat onClose={()=>setShowChat(false)}/>}</>;
  if (page==="payment") return <><PaymentPage setPage={nav} onAddCard={()=>setShowAddCard(true)}/>{showAddCard&&<AddCardModal onClose={()=>setShowAddCard(false)}/>}{showChat&&<LiveChat onClose={()=>setShowChat(false)}/>}</>;
  if (page==="privacy") return <><PrivacyPage setPage={nav}/>{showChat&&<LiveChat onClose={()=>setShowChat(false)}/>}</>;
  if (page==="notifications") return <><NotificationsPage setPage={nav} notifs={notifs} setNotifs={setNotifs}/>{showChat&&<LiveChat onClose={()=>setShowChat(false)}/>}</>;
  if (page==="bookings") return <><BookingsPage setPage={nav}/>{showChat&&<LiveChat onClose={()=>setShowChat(false)}/>}</>;
  if (page==="services") return <><ServicesPage setPage={nav} user={user||{}}/>{showChat&&<LiveChat onClose={()=>setShowChat(false)}/>}</>;
  if (page==="help") return <><HelpPage setPage={nav} setShowChat={setShowChat}/>{showChat&&<LiveChat onClose={()=>setShowChat(false)}/>}</>;
  if (page==="terms") return <><TermsPage setPage={nav}/>{showChat&&<LiveChat onClose={()=>setShowChat(false)}/>}</>;
  if (page==="map") return <><MapPage setPage={nav}/>{showChat&&<LiveChat onClose={()=>setShowChat(false)}/>}</>;

  return (
    <div style={{minHeight:"100vh",background:BG,color:TXT,fontFamily:"system-ui,sans-serif"}}>

      {/* SIDE MENU OVERLAY */}
      {menuOpen && (
        <div style={{position:"fixed",inset:0,zIndex:100}} onClick={()=>setMenuOpen(false)}>
          <div style={{position:"absolute",top:0,left:0,width:280,height:"100vh",background:SUR,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",display:"flex",flexDirection:"column",padding:"0 0 24px"}} onClick={e=>e.stopPropagation()}>
            {/* Menu header */}
            <div style={{background:`linear-gradient(135deg,${A},${A2})`,padding:"28px 20px 20px",marginBottom:8}}>
              <Wordmark size={18}/>
              {user && (
                <div style={{display:"flex",alignItems:"center",gap:12,marginTop:16}}>
                  <div style={{width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:"#fff",fontSize:16,overflow:"hidden",flexShrink:0}}>
                    {user.dp?<img src={user.dp} alt="dp" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:(user.name||"U")[0]}
                  </div>
                  <div>
                    <div style={{color:"#fff",fontWeight:700,fontSize:14}}>{user.name||"My Account"}</div>
                    <div style={{color:"rgba(255,255,255,0.75)",fontSize:12}}>{user.email||""}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Menu items */}
            <div style={{flex:1,overflowY:"auto",padding:"8px 12px"}}>
              {[
                {icon:"🏠",label:"Home",page:"home"},
                {icon:"🔍",label:"Find Professionals",page:"search"},
                {icon:"🗺",label:"Explore Map",page:"map"},
                ...(user?[
                  {icon:"👤",label:"My Profile",page:"profile"},
                  {icon:"📅",label:"My Bookings",page:"bookings"},
                  {icon:"🛠",label:"My Services",page:"services"},
                  {icon:"💳",label:"Payment",page:"payment"},
                  {icon:"🔔",label:"Notifications",page:"notifications",badge:unread},
                  {icon:"⚙️",label:"Settings",page:"settings"},
                ]:[
                  {icon:"🔑",label:"Log In",action:()=>{setMenuOpen(false);setAuth("login");}},
                  {icon:"✨",label:"Sign Up",action:()=>{setMenuOpen(false);setAuth("signup");}},
                ]),
                {icon:"❓",label:"Help & Support",page:"help"},
                {icon:"📋",label:"Terms & Privacy",page:"terms"},
              ].map((item,i)=>(
                <div key={i} onClick={item.action||(()=>nav(item.page))} style={{display:"flex",alignItems:"center",gap:14,padding:"12px 10px",borderRadius:12,cursor:"pointer",marginBottom:2,background:page===item.page?`${A}10`:"transparent"}}
                  onMouseEnter={e=>e.currentTarget.style.background=`${A}08`}
                  onMouseLeave={e=>e.currentTarget.style.background=page===item.page?`${A}10`:"transparent"}>
                  <span style={{fontSize:20,width:28,textAlign:"center"}}>{item.icon}</span>
                  <span style={{flex:1,fontWeight:page===item.page?700:500,fontSize:14,color:page===item.page?A:TXT}}>{item.label}</span>
                  {item.badge>0 && <span style={{background:RED,color:"#fff",borderRadius:20,fontSize:10,fontWeight:800,padding:"2px 7px"}}>{item.badge}</span>}
                </div>
              ))}
            </div>

            {user && (
              <div style={{padding:"0 12px"}}>
                <button onClick={()=>{setUser(null);setMenuOpen(false);nav("home");}} style={{width:"100%",background:"#FEF2F2",color:RED,border:`1px solid #FECACA`,borderRadius:12,padding:"12px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>🚪 Log Out</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <div style={{background:`${SUR}F2`,backdropFilter:"blur(12px)",borderBottom:`1px solid ${BDR}`,padding:"0 16px",height:58,display:"flex",alignItems:"center",position:"sticky",top:0,zIndex:50,boxShadow:"0 1px 8px rgba(0,0,0,0.06)"}}>
        {/* Hamburger */}
        <button onClick={()=>setMenuOpen(true)} style={{background:"none",border:"none",cursor:"pointer",padding:"6px",marginRight:8,display:"flex",flexDirection:"column",gap:4}}>
          <div style={{width:20,height:2,background:TXT,borderRadius:2}}/>
          <div style={{width:16,height:2,background:TXT,borderRadius:2}}/>
          <div style={{width:20,height:2,background:TXT,borderRadius:2}}/>
        </button>

        <div onClick={()=>nav("home")} style={{cursor:"pointer"}}><Wordmark size={16}/></div>
        <div style={{flex:1}}/>

        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          {user && (
            <div onClick={()=>nav("notifications")} style={{position:"relative",cursor:"pointer",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",background:BG,borderRadius:"50%",border:`1px solid ${BDR}`}}>
              <span style={{fontSize:17}}>🔔</span>
              {unread>0&&<div style={{position:"absolute",top:1,right:1,width:16,height:16,borderRadius:"50%",background:RED,color:"#fff",fontSize:9,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}}>{unread}</div>}
            </div>
          )}
          {user
            ? <button onClick={()=>nav("settings")} style={{width:36,height:36,borderRadius:"50%",background:`${A}15`,border:`2px solid ${A}30`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontWeight:800,color:A,fontSize:14,overflow:"hidden"}}>
                {user.dp?<img src={user.dp} alt="dp" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:(user.name||"U")[0]}
              </button>
            : <>
                <button onClick={()=>setAuth("login")} style={{background:"transparent",border:`1.5px solid ${BDR}`,color:MUT,borderRadius:8,padding:"6px 12px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Log In</button>
                <button onClick={()=>setAuth("signup")} style={{background:A,color:"#fff",border:"none",borderRadius:8,padding:"6px 12px",fontWeight:800,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>Sign Up</button>
              </>
          }
        </div>
      </div>

      {/* HOME */}
      {page==="home" && (
        <div>
          <div style={{background:`linear-gradient(135deg,${A} 0%,${A2} 100%)`,padding:"56px 16px 48px",textAlign:"center",color:"#fff"}}>
            <div style={{display:"inline-block",background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.25)",borderRadius:20,padding:"4px 14px",fontSize:12,fontWeight:700,marginBottom:18}}>✦ Trusted by thousands of professionals</div>
            <h1 style={{fontSize:"clamp(26px,6vw,52px)",fontWeight:800,lineHeight:1.1,marginBottom:12}}>Find Skilled <span style={{color:"#BAE6FD"}}>Professionals</span><br/>In Your City</h1>
            <p style={{fontSize:15,maxWidth:420,margin:"0 auto 30px",lineHeight:1.7,opacity:0.9}}>Discover verified electricians, photographers, tutors, barbers and more — right in your neighbourhood.</p>
            <div style={{background:"#fff",borderRadius:14,padding:8,maxWidth:560,margin:"0 auto",display:"flex",gap:8,flexWrap:"wrap",boxShadow:"0 4px 24px rgba(0,0,0,0.15)"}}>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="What service do you need?" style={{flex:2,minWidth:140,background:"transparent",border:"none",color:TXT,fontSize:14,padding:"8px 10px",outline:"none",fontFamily:"inherit"}}/>
              <select value={selState} onChange={e=>{setSelState(e.target.value);setSelCity("");}} style={{...ss,minWidth:110,background:BG}}>
                <option value="">All States</option>
                {STATES.map(s=><option key={s.name}>{s.name}</option>)}
              </select>
              <button onClick={()=>nav("search")} style={{background:A,color:"#fff",border:"none",borderRadius:9,padding:"10px 22px",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>Search</button>
            </div>
          </div>

          <div style={{display:"flex",justifyContent:"center",gap:"clamp(20px,5vw,56px)",padding:"24px 16px 28px",borderBottom:`1px solid ${BDR}`,flexWrap:"wrap",background:SUR}}>
            {[["3,200+","Verified Pros"],["36","States"],["16+","Services"],["18k+","Jobs Done"]].map(([n,l])=>(
              <div key={l} style={{textAlign:"center"}}>
                <div style={{fontSize:24,fontWeight:800,color:A}}>{n}</div>
                <div style={{fontSize:12,color:MUT,marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{padding:"30px 16px",maxWidth:860,margin:"0 auto"}}>
            <div style={{fontWeight:800,fontSize:18,color:TXT,marginBottom:16}}>Browse by Category</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(95px,1fr))",gap:10}}>
              {CATS.map(c=>(
                <div key={c} onClick={()=>{setSearch(c);nav("search");}} style={{background:SUR,border:`1.5px solid ${BDR}`,borderRadius:14,padding:"14px 8px",textAlign:"center",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=A;e.currentTarget.style.background=`${A}08`;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=BDR;e.currentTarget.style.background=SUR;}}>
                  <div style={{fontSize:24,marginBottom:5}}>{CAT_ICONS[c]||"🔨"}</div>
                  <div style={{color:TXT,fontSize:11,fontWeight:600}}>{c}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{padding:"0 16px 30px",maxWidth:860,margin:"0 auto"}}>
            <div style={{fontWeight:800,fontSize:18,color:TXT,marginBottom:16}}>Top Rated Professionals</div>
            {PROS.slice(0,4).map(p=><ProCard key={p.id} p={p}/>)}
            <button onClick={()=>nav("search")} style={{width:"100%",background:SUR,border:`1.5px solid ${BDR}`,color:A,borderRadius:12,padding:"13px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>View All Professionals →</button>
          </div>

          <div style={{background:`linear-gradient(135deg,${A},${A2})`,padding:"48px 16px",textAlign:"center",color:"#fff"}}>
            <div style={{fontWeight:800,fontSize:22,marginBottom:10}}>Ready to Grow Your Business?</div>
            <p style={{fontSize:14,marginBottom:24,maxWidth:380,margin:"0 auto 24px",opacity:0.9}}>Join thousands of skilled professionals who use Nexstaff to find clients.</p>
            <button onClick={()=>setAuth("signup")} style={{background:"#fff",color:A,border:"none",borderRadius:12,padding:"14px 36px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>Join as a Professional →</button>
          </div>
        </div>
      )}

      {/* SEARCH */}
      {page==="search" && (
        <div style={{maxWidth:860,margin:"0 auto",padding:"26px 16px"}}>
          <div style={{fontWeight:800,fontSize:20,color:TXT,marginBottom:16}}>Find a Professional</div>
          <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Service or name..." style={{...ss,flex:2,minWidth:140}}/>
            <select value={selState} onChange={e=>{setSelState(e.target.value);setSelCity("");}} style={{...ss,minWidth:120}}>
              <option value="">All States</option>
              {STATES.map(s=><option key={s.name}>{s.name}</option>)}
            </select>
            {stateObj&&(
              <select value={selCity} onChange={e=>setSelCity(e.target.value)} style={{...ss,minWidth:110}}>
                <option value="">All Cities</option>
                {stateObj.cities.map(c=><option key={c}>{c}</option>)}
              </select>
            )}
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:16}}>
            {CATS.map(c=>(
              <button key={c} onClick={()=>setSearch(search===c?"":c)} style={{background:search===c?`${A}12`:SUR,color:search===c?A:MUT,border:`1.5px solid ${search===c?A:BDR}`,borderRadius:20,padding:"5px 11px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}>{CAT_ICONS[c]||"🔨"} {c}</button>
            ))}
          </div>
          <div style={{color:MUT,fontSize:13,marginBottom:12}}>{results.length} result{results.length!==1?"s":""}</div>
          {results.length===0
            ? <div style={{textAlign:"center",padding:"48px 0"}}>
                <div style={{fontSize:40,marginBottom:12}}>🔍</div>
                <div style={{fontWeight:700,color:TXT,marginBottom:6,fontSize:17}}>No results found</div>
                <div style={{color:MUT,fontSize:13}}>Try a different search or location</div>
              </div>
            : results.map(p=><ProCard key={p.id} p={p}/>)
          }
        </div>
      )}

      {/* FOOTER */}
      <div style={{borderTop:`1px solid ${BDR}`,padding:"24px 16px",textAlign:"center",background:SUR}}>
        <div style={{marginBottom:6}}><Wordmark size={15}/></div>
        <div style={{color:FNT,fontSize:11}}>Professional Services Platform · © 2025 Nexstaff Technologies Ltd</div>
      </div>

      {/* MODALS & OVERLAYS */}
      {auth&&<AuthModal mode={auth} onClose={()=>setAuth(null)} onDone={u=>{setUser({...u});setAuth(null);}} onProviderSignup={u=>{setUser({...u});setAuth(null);setShowOnboarding(true);}}/>}
      {showAddCard&&<AddCardModal onClose={()=>setShowAddCard(false)}/>}
      {showChat&&<LiveChat onClose={()=>setShowChat(false)}/>}

      {/* CHAT BUBBLE */}
      {!showChat&&(
        <button onClick={()=>setShowChat(true)} style={{position:"fixed",bottom:24,right:20,width:52,height:52,borderRadius:"50%",background:A,color:"#fff",border:"none",boxShadow:"0 4px 16px rgba(30,64,175,0.4)",cursor:"pointer",fontSize:22,zIndex:99,display:"flex",alignItems:"center",justifyContent:"center"}}>
          💬
        </button>
      )}
    </div>
  );
}