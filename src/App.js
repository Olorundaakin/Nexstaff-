import { useState } from "react";

const STATES = [
  { name:"Lagos", cities:["Ikeja","Lekki","Victoria Island","Surulere","Yaba","Ikorodu","Badagry","Epe"] },
  { name:"FCT Abuja", cities:["Abuja","Gwagwalada","Kuje","Bwari","Lugbe","Zuba"] },
  { name:"Rivers", cities:["Port Harcourt","Obio-Akpor","Okrika","Bonny","Eleme"] },
  { name:"Kano", cities:["Kano","Wudil","Gwarzo","Rano","Bichi","Dambatta"] },
  { name:"Anambra", cities:["Awka","Onitsha","Nnewi","Ekwulobia","Ogidi","Obosi"] },
  { name:"Oyo", cities:["Ibadan","Ogbomosho","Oyo","Saki","Iseyin"] },
  { name:"Delta", cities:["Asaba","Warri","Sapele","Ughelli","Agbor"] },
  { name:"Kaduna", cities:["Kaduna","Zaria","Kafanchan","Saminaka"] },
  { name:"Enugu", cities:["Enugu","Nsukka","Agbani","Oji River","Udi"] },
  { name:"Ondo", cities:["Akure","Ondo","Owo","Okitipupa","Akungba","Ikare"] },
  { name:"Edo", cities:["Benin City","Auchi","Ekpoma","Uromi"] },
  { name:"Ogun", cities:["Abeokuta","Sagamu","Ijebu-Ode","Ilaro","Ota"] },
  { name:"Imo", cities:["Owerri","Orlu","Okigwe","Oguta"] },
  { name:"Abia", cities:["Umuahia","Aba","Arochukwu","Ohafia"] },
  { name:"Cross River", cities:["Calabar","Ikom","Ogoja","Obudu"] },
  { name:"Benue", cities:["Makurdi","Otukpo","Gboko","Katsina-Ala"] },
  { name:"Plateau", cities:["Jos","Bukuru","Shendam","Pankshin"] },
  { name:"Kwara", cities:["Ilorin","Offa","Omu-Aran","Lafiagi"] },
  { name:"Osun", cities:["Osogbo","Ile-Ife","Ilesa","Ede","Iwo"] },
  { name:"Ekiti", cities:["Ado-Ekiti","Ikere","Oye","Ikole"] },
  { name:"Akwa Ibom", cities:["Uyo","Eket","Ikot Ekpene","Oron"] },
  { name:"Bayelsa", cities:["Yenagoa","Ogbia","Brass","Nembe"] },
  { name:"Niger", cities:["Minna","Bida","Suleja","Kontagora"] },
  { name:"Nasarawa", cities:["Lafia","Keffi","Akwanga","Nasarawa"] },
  { name:"Kogi", cities:["Lokoja","Okene","Kabba","Idah"] },
  { name:"Ebonyi", cities:["Abakaliki","Afikpo","Onueke","Ezza"] },
  { name:"Bauchi", cities:["Bauchi","Azare","Misau","Katagum"] },
  { name:"Gombe", cities:["Gombe","Kaltungo","Billiri","Dukku"] },
  { name:"Taraba", cities:["Jalingo","Wukari","Bali","Gembu"] },
  { name:"Adamawa", cities:["Yola","Mubi","Jimeta","Numan"] },
  { name:"Borno", cities:["Maiduguri","Biu","Ngala","Gwoza"] },
  { name:"Yobe", cities:["Damaturu","Potiskum","Gashua","Nguru"] },
  { name:"Jigawa", cities:["Dutse","Hadejia","Gumel","Kazaure"] },
  { name:"Katsina", cities:["Katsina","Daura","Funtua","Malumfashi"] },
  { name:"Kebbi", cities:["Birnin Kebbi","Argungu","Yelwa","Zuru"] },
  { name:"Sokoto", cities:["Sokoto","Bodinga","Gada","Goronyo"] },
  { name:"Zamfara", cities:["Gusau","Kaura Namoda","Talata Mafara","Anka"] },
];

const CATS = [
  {icon:"⚡",label:"Electrician"},{icon:"🔧",label:"Plumber"},{icon:"🪚",label:"Carpenter"},
  {icon:"📸",label:"Photographer"},{icon:"✂️",label:"Barber"},{icon:"💄",label:"Makeup Artist"},
  {icon:"📚",label:"Tutor"},{icon:"🎨",label:"Graphic Designer"},{icon:"💻",label:"Web Developer"},
  {icon:"🚗",label:"Mechanic"},{icon:"🧹",label:"Cleaner"},{icon:"🍳",label:"Caterer"},
  {icon:"👗",label:"Tailor"},{icon:"📱",label:"Phone Repairer"},{icon:"💈",label:"Hair Stylist"},{icon:"🏗️",label:"Mason"},
];

const PROS = [
  {id:1,name:"Adewale Johnson",role:"Electrician",icon:"⚡",rating:4.9,jobs:312,city:"Ikeja",state:"Lagos",address:"12 Allen Avenue, Ikeja",verified:true,color:"#1E3A8A",price:"₦5k–₦20k",av:"AJ"},
  {id:2,name:"Ngozi Okafor",role:"Photographer",icon:"📸",rating:5.0,jobs:489,city:"Victoria Island",state:"Lagos",address:"5 Adeola Odeku Street, VI",verified:true,color:"#7C3AED",price:"₦30k–₦150k",av:"NO"},
  {id:3,name:"Emeka Obi",role:"Plumber",icon:"🔧",rating:4.7,jobs:198,city:"Abuja",state:"FCT Abuja",address:"Plot 44 Wuse Zone 5, Abuja",verified:true,color:"#0369A1",price:"₦3k–₦15k",av:"EO"},
  {id:4,name:"Fatima Al-Hassan",role:"Makeup Artist",icon:"💄",rating:4.8,jobs:567,city:"Kano",state:"Kano",address:"14 Bompai Road, Kano",verified:true,color:"#BE185D",price:"₦15k–₦80k",av:"FA"},
  {id:5,name:"Chidi Nwosu",role:"Barber",icon:"✂️",rating:4.6,jobs:1200,city:"Onitsha",state:"Anambra",address:"22 New Market Road, Onitsha",verified:false,color:"#065F46",price:"₦500–₦2k",av:"CN"},
  {id:6,name:"Blessing Eze",role:"Hair Stylist",icon:"💈",rating:4.9,jobs:834,city:"Port Harcourt",state:"Rivers",address:"8 Rumuola Road, Port Harcourt",verified:true,color:"#C2410C",price:"₦3k–₦25k",av:"BE"},
  {id:7,name:"Musa Tanko",role:"Mechanic",icon:"🚗",rating:4.5,jobs:421,city:"Kaduna",state:"Kaduna",address:"3 Kachia Road, Kaduna",verified:true,color:"#0E7490",price:"₦5k–₦50k",av:"MT"},
  {id:8,name:"Amina Bello",role:"Tailor",icon:"👗",rating:5.0,jobs:276,city:"Akungba",state:"Ondo",address:"7 Ikare Road, Akungba",verified:false,color:"#6D28D9",price:"₦5k–₦40k",av:"AB"},
];

// Colors - White + Deep Blue
const A="#1E40AF"; // Deep Blue accent
const A2="#3B82F6"; // Lighter blue
const BG="#F8FAFF"; // Off white bg
const SUR="#FFFFFF"; // White surface
const CRD="#FFFFFF"; // White card
const BDR="#E2E8F0"; // Light border
const TXT="#0F172A"; // Dark text
const MUT="#64748B"; // Muted text
const FNT="#94A3B8"; // Faint text
const GRN="#059669"; // Green
const RED="#DC2626"; // Red
const YLW="#D97706"; // Yellow/amber for stars

function ProCard({p}) {
  return (
    <div style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:16,padding:18,marginBottom:12,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
      <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
        <div style={{width:48,height:48,borderRadius:"50%",background:p.color+"18",border:`2px solid ${p.color}33`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:p.color,flexShrink:0,fontSize:15}}>{p.av}</div>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:3}}>
            <span style={{fontWeight:700,fontSize:15,color:TXT}}>{p.name}</span>
            {p.verified && <span style={{background:"#DCFCE7",color:GRN,border:"1px solid #BBF7D0",borderRadius:20,fontSize:10,fontWeight:700,padding:"2px 8px"}}>✓ VERIFIED</span>}
          </div>
          <div style={{color:MUT,fontSize:12,marginBottom:2}}>{p.icon} {p.role} · {p.city}, {p.state}</div>
          <div style={{color:FNT,fontSize:11,marginBottom:6}}>📍 {p.address}</div>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{color:YLW,fontSize:12}}>{"★".repeat(Math.round(p.rating))}</span>
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

function ProfilePage({user,setUser,setPage}) {
  const [form,setForm] = useState({
    name:user.name||"",
    email:user.email||"",
    phone:user.phone||"",
    bio:user.bio||"",
    state:user.state||"",
    city:user.city||"",
    address:user.address||"",
    dp:user.dp||null,
  });
  const [saved,setSaved] = useState(false);
  const upd = (k,v) => setForm(f=>({...f,[k]:v}));
  const stateObj = STATES.find(s=>s.name===form.state);

  const handleDpChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => upd("dp", ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    setUser({...user,...form});
    setSaved(true);
    setTimeout(()=>setSaved(false),2000);
  };

  const inp = {width:"100%",background:BG,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"11px 13px",fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:12,boxSizing:"border-box"};

  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
        <button onClick={()=>setPage("settings")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MUT}}>←</button>
        <div style={{fontWeight:800,fontSize:20,color:TXT}}>My Profile</div>
      </div>

      {/* Profile Photo */}
      <div style={{textAlign:"center",marginBottom:28}}>
        <div style={{position:"relative",display:"inline-block"}}>
          <div style={{width:100,height:100,borderRadius:"50%",background:form.dp?"transparent":`${A}18`,border:`3px solid ${A}33`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto",overflow:"hidden"}}>
            {form.dp
              ? <img src={form.dp} alt="dp" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
              : <span style={{fontSize:36,fontWeight:800,color:A}}>{(form.name||"U")[0]}</span>
            }
          </div>
          <label style={{position:"absolute",bottom:0,right:0,background:A,borderRadius:"50%",width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",border:"2px solid #fff"}}>
            <span style={{color:"#fff",fontSize:14}}>📷</span>
            <input type="file" accept="image/*" onChange={handleDpChange} style={{display:"none"}}/>
          </label>
        </div>
        <div style={{color:MUT,fontSize:12,marginTop:8}}>Tap the camera to change your photo</div>
      </div>

      <div style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:16,padding:20,marginBottom:16,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
        <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:16}}>Personal Information</div>
        <div style={{color:MUT,fontSize:12,marginBottom:4}}>Full Name</div>
        <input value={form.name} onChange={e=>upd("name",e.target.value)} placeholder="Your full name" style={inp}/>
        <div style={{color:MUT,fontSize:12,marginBottom:4}}>Email Address</div>
        <input value={form.email} onChange={e=>upd("email",e.target.value)} placeholder="your@email.com" style={inp}/>
        <div style={{color:MUT,fontSize:12,marginBottom:4}}>Phone Number</div>
        <div style={{position:"relative",marginBottom:12}}>
          <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:MUT,fontSize:13,fontWeight:600}}>+234</span>
          <input value={form.phone} onChange={e=>upd("phone",e.target.value)} placeholder="Phone number" style={{...inp,paddingLeft:56,marginBottom:0}}/>
        </div>
        <div style={{color:MUT,fontSize:12,marginBottom:4}}>Bio</div>
        <textarea value={form.bio} onChange={e=>upd("bio",e.target.value)} placeholder="Tell people about yourself..." rows={3} style={{...inp,resize:"vertical"}}/>
      </div>

      <div style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:16,padding:20,marginBottom:20,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
        <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:16}}>Location</div>
        <div style={{color:MUT,fontSize:12,marginBottom:4}}>State</div>
        <select value={form.state} onChange={e=>{upd("state",e.target.value);upd("city","");}} style={inp}>
          <option value="">Select state...</option>
          {STATES.map(s=><option key={s.name}>{s.name}</option>)}
        </select>
        {stateObj && (
          <>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>City</div>
            <select value={form.city} onChange={e=>upd("city",e.target.value)} style={inp}>
              <option value="">Select city...</option>
              {stateObj.cities.map(c=><option key={c}>{c}</option>)}
            </select>
          </>
        )}
        <div style={{color:MUT,fontSize:12,marginBottom:4}}>Street Address</div>
        <input value={form.address} onChange={e=>upd("address",e.target.value)} placeholder="e.g. 12 Allen Avenue, Ikeja" style={inp}/>
      </div>

      <button onClick={handleSave} style={{width:"100%",background:A,color:"#fff",border:"none",borderRadius:12,padding:"14px",fontWeight:800,fontSize:16,cursor:"pointer",fontFamily:"inherit"}}>
        {saved ? "✓ Saved!" : "Save Changes"}
      </button>
    </div>
  );
}

function SettingsPage({user,setUser,setPage,setAuth}) {
  const menuItems = [
    {icon:"👤",label:"Profile",sub:"Edit your personal information",action:()=>setPage("profile")},
    {icon:"💳",label:"Payment",sub:"Manage payment methods",action:()=>setPage("payment")},
    {icon:"🔔",label:"Notifications",sub:"Control your alerts",action:()=>setPage("notifications")},
    {icon:"🔒",label:"Privacy & Security",sub:"Password and account security",action:()=>setPage("privacy")},
    {icon:"⭐",label:"My Bookings",sub:"View your booking history",action:()=>setPage("bookings")},
    {icon:"🛠",label:"My Services",sub:"Manage your professional listing",action:()=>setPage("services")},
    {icon:"❓",label:"Help & Support",sub:"Get help from our team",action:()=>{}},
    {icon:"📋",label:"Terms & Privacy Policy",sub:"Read our policies",action:()=>{}},
  ];

  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      {/* Profile summary */}
      <div style={{background:`linear-gradient(135deg,${A} 0%,${A2} 100%)`,borderRadius:20,padding:24,marginBottom:24,color:"#fff",display:"flex",gap:16,alignItems:"center"}}>
        <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(255,255,255,0.2)",border:"3px solid rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,fontWeight:800,overflow:"hidden",flexShrink:0}}>
          {user.dp ? <img src={user.dp} alt="dp" style={{width:"100%",height:"100%",objectFit:"cover"}}/> : (user.name||"U")[0]}
        </div>
        <div>
          <div style={{fontWeight:800,fontSize:18}}>{user.name||"My Account"}</div>
          <div style={{fontSize:13,opacity:0.85}}>{user.email||""}</div>
          <div style={{fontSize:12,opacity:0.7,marginTop:2}}>{user.city&&user.state?`📍 ${user.city}, ${user.state}`:""}</div>
        </div>
      </div>

      <div style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:16,overflow:"hidden",boxShadow:"0 1px 4px rgba(0,0,0,0.06)",marginBottom:16}}>
        {menuItems.map((item,i)=>(
          <div key={item.label} onClick={item.action} style={{display:"flex",alignItems:"center",gap:14,padding:"16px 18px",borderBottom:i<menuItems.length-1?`1px solid ${BDR}`:"none",cursor:"pointer",transition:"background 0.15s"}}
            onMouseEnter={e=>e.currentTarget.style.background=BG}
            onMouseLeave={e=>e.currentTarget.style.background=CRD}>
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

function PaymentPage({setPage}) {
  const [cards] = useState([]);
  return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"24px 16px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
        <button onClick={()=>setPage("settings")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MUT}}>←</button>
        <div style={{fontWeight:800,fontSize:20,color:TXT}}>Payment</div>
      </div>
      <div style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:16,padding:20,marginBottom:16,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
        <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:4}}>Payment Methods</div>
        <div style={{color:MUT,fontSize:13,marginBottom:16}}>Add a card or bank account to pay for services</div>
        {cards.length===0 && (
          <div style={{textAlign:"center",padding:"24px 0"}}>
            <div style={{fontSize:40,marginBottom:10}}>💳</div>
            <div style={{color:MUT,fontSize:13}}>No payment methods added yet</div>
          </div>
        )}
        <button style={{width:"100%",background:A,color:"#fff",border:"none",borderRadius:10,padding:"13px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>+ Add Payment Method</button>
      </div>
      <div style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:16,padding:20,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
        <div style={{fontWeight:700,fontSize:15,color:TXT,marginBottom:4}}>Transaction History</div>
        <div style={{textAlign:"center",padding:"24px 0"}}>
          <div style={{fontSize:40,marginBottom:10}}>📋</div>
          <div style={{color:MUT,fontSize:13}}>No transactions yet</div>
        </div>
      </div>
    </div>
  );
}

function OnboardingPage({onDone}) {
  const [step,setStep] = useState(1);
  const [form,setForm] = useState({category:"",state:"",city:"",address:"",phone:"",price:"",experience:"",bio:""});
  const [submitted,setSubmitted] = useState(false);
  const upd = (k,v)=>setForm(f=>({...f,[k]:v}));
  const stateObj = STATES.find(s=>s.name===form.state);
  const inp = {width:"100%",background:BG,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"11px 13px",fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:12,boxSizing:"border-box"};

  if (submitted) return (
    <div style={{minHeight:"100vh",background:BG,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:20,padding:36,textAlign:"center",maxWidth:360,width:"100%",boxShadow:"0 4px 24px rgba(0,0,0,0.08)"}}>
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
        <div style={{fontWeight:800,fontSize:18,color:A,marginBottom:4}}>Nex<span style={{color:TXT}}>staff</span></div>
        <div style={{color:MUT,fontSize:13,marginBottom:24}}>Set up your professional profile</div>
        <div style={{display:"flex",gap:6,marginBottom:28}}>
          {[1,2,3].map(s=><div key={s} style={{flex:1,height:5,borderRadius:4,background:s<=step?A:BDR,transition:"background 0.3s"}}/>)}
        </div>

        {step===1 && (
          <div>
            <div style={{color:TXT,fontWeight:700,fontSize:17,marginBottom:4}}>What service do you offer?</div>
            <div style={{color:MUT,fontSize:13,marginBottom:16}}>Select your main category</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:20}}>
              {CATS.map(c=>(
                <button key={c.label} onClick={()=>upd("category",c.label)} style={{background:form.category===c.label?`${A}12`:CRD,color:form.category===c.label?A:TXT,border:`1.5px solid ${form.category===c.label?A:BDR}`,borderRadius:12,padding:"12px 10px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"}}>
                  {c.icon} {c.label}
                </button>
              ))}
            </div>
            <button onClick={()=>form.category&&setStep(2)} style={{width:"100%",background:form.category?A:"#E2E8F0",color:form.category?"#fff":MUT,border:"none",borderRadius:12,padding:"14px",fontWeight:800,fontSize:15,cursor:form.category?"pointer":"default",fontFamily:"inherit"}}>Next →</button>
          </div>
        )}

        {step===2 && (
          <div>
            <div style={{color:TXT,fontWeight:700,fontSize:17,marginBottom:4}}>Where are you based?</div>
            <div style={{color:MUT,fontSize:13,marginBottom:16}}>Clients will find you by location</div>
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>State</div>
            <select value={form.state} onChange={e=>{upd("state",e.target.value);upd("city","");}} style={inp}>
              <option value="">Select your state...</option>
              {STATES.map(s=><option key={s.name}>{s.name}</option>)}
            </select>
            {stateObj && (<>
              <div style={{color:MUT,fontSize:12,marginBottom:4}}>City / Town</div>
              <select value={form.city} onChange={e=>upd("city",e.target.value)} style={inp}>
                <option value="">Select your city...</option>
                {stateObj.cities.map(c=><option key={c}>{c}</option>)}
              </select>
            </>)}
            <div style={{color:MUT,fontSize:12,marginBottom:4}}>Street Address</div>
            <input value={form.address} onChange={e=>upd("address",e.target.value)} placeholder="e.g. 12 Allen Avenue, Ikeja" style={inp}/>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>setStep(1)} style={{flex:1,background:CRD,color:MUT,border:`1px solid ${BDR}`,borderRadius:12,padding:"14px",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>← Back</button>
              <button onClick={()=>form.state&&form.city&&form.address&&setStep(3)} style={{flex:2,background:form.state&&form.city&&form.address?A:"#E2E8F0",color:form.state&&form.city&&form.address?"#fff":MUT,border:"none",borderRadius:12,padding:"14px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>Next →</button>
            </div>
          </div>
        )}

        {step===3 && (
          <div>
            <div style={{color:TXT,fontWeight:700,fontSize:17,marginBottom:4}}>About you</div>
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
              <button onClick={()=>setStep(2)} style={{flex:1,background:CRD,color:MUT,border:`1px solid ${BDR}`,borderRadius:12,padding:"14px",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>← Back</button>
              <button onClick={()=>setSubmitted(true)} style={{flex:2,background:A,color:"#fff",border:"none",borderRadius:12,padding:"14px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>🚀 Submit Profile</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AuthModal({mode,onClose,onDone,onProviderSignup}) {
  const [tab,setTab] = useState(mode);
  const [step,setStep] = useState(1);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [pass,setPass] = useState("");
  const [type,setType] = useState("customer");
  const [done,setDone] = useState(false);

  const inp = {width:"100%",background:BG,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"11px 13px",fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:10,boxSizing:"border-box"};

  const handleDone = () => { if(type==="provider"){onProviderSignup({name,email,phone});}else{onDone({name,email,phone});} };

  if (done) return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:99,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:20,padding:32,textAlign:"center",maxWidth:320,width:"100%",boxShadow:"0 8px 32px rgba(0,0,0,0.12)"}}>
        <div style={{fontSize:48,marginBottom:12}}>🎉</div>
        <div style={{color:A,fontWeight:800,fontSize:20,marginBottom:6}}>Welcome to Nexstaff!</div>
        <div style={{color:MUT,fontSize:13,marginBottom:20}}>{type==="provider"?"Let's set up your professional profile.":"Your account is ready."}</div>
        <button onClick={handleDone} style={{background:A,color:"#fff",border:"none",borderRadius:10,padding:"12px 32px",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>{type==="provider"?"Set Up Profile →":"Get Started"}</button>
      </div>
    </div>
  );

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:99,display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(4px)"}} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:20,padding:28,width:"100%",maxWidth:380,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 8px 32px rgba(0,0,0,0.12)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <span style={{fontWeight:800,fontSize:18,color:A}}>Nex<span style={{color:TXT}}>staff</span></span>
          <button onClick={onClose} style={{background:"#F1F5F9",border:"none",color:MUT,width:30,height:30,borderRadius:"50%",cursor:"pointer",fontSize:14}}>✕</button>
        </div>

        <div style={{display:"flex",background:BG,borderRadius:10,padding:4,marginBottom:20,border:`1px solid ${BDR}`}}>
          {["login","signup"].map(t=>(
            <button key={t} onClick={()=>{setTab(t);setStep(1);}} style={{flex:1,background:tab===t?A:"transparent",color:tab===t?"#fff":MUT,border:"none",borderRadius:8,padding:"9px",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}>
              {t==="login"?"Log In":"Sign Up"}
            </button>
          ))}
        </div>

        <button onClick={()=>setDone(true)} style={{width:"100%",background:CRD,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"11px",display:"flex",alignItems:"center",justifyContent:"center",gap:10,cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:600,marginBottom:14,boxSizing:"border-box",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}}>
          <svg width="17" height="17" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>
          Continue with Google
        </button>

        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
          <div style={{flex:1,height:1,background:BDR}}/>
          <span style={{color:FNT,fontSize:11}}>or with email</span>
          <div style={{flex:1,height:1,background:BDR}}/>
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

export default function App() {
  const [page,setPage] = useState("home");
  const [auth,setAuth] = useState(null);
  const [user,setUser] = useState(null);
  const [search,setSearch] = useState("");
  const [selState,setSelState] = useState("");
  const [selCity,setSelCity] = useState("");
  const [showOnboarding,setShowOnboarding] = useState(false);

  const stateObj = STATES.find(s=>s.name===selState);
  const ss = {background:SUR,border:`1.5px solid ${BDR}`,color:TXT,borderRadius:10,padding:"10px 12px",fontSize:13,outline:"none",fontFamily:"inherit"};

  const results = PROS.filter(p=>{
    const q=search.toLowerCase();
    return (!q||p.role.toLowerCase().includes(q)||p.name.toLowerCase().includes(q))
      &&(!selState||p.state===selState)
      &&(!selCity||p.city===selCity);
  });

  if (showOnboarding) return <OnboardingPage onDone={()=>{setShowOnboarding(false);setPage("home");}}/>;
  if (page==="profile") return <ProfilePage user={user||{}} setUser={setUser} setPage={setPage}/>;
  if (page==="settings") return <SettingsPage user={user||{}} setUser={setUser} setPage={setPage} setAuth={setAuth}/>;
  if (page==="payment") return <PaymentPage setPage={setPage}/>;

  return (
    <div style={{minHeight:"100vh",background:BG,color:TXT,fontFamily:"system-ui,sans-serif"}}>

      {/* NAV */}
      <div style={{background:`${SUR}F0`,backdropFilter:"blur(12px)",borderBottom:`1px solid ${BDR}`,padding:"0 16px",height:58,display:"flex",alignItems:"center",position:"sticky",top:0,zIndex:50,boxShadow:"0 1px 8px rgba(0,0,0,0.06)"}}>
        <div onClick={()=>setPage("home")} style={{fontWeight:800,fontSize:18,cursor:"pointer",color:A}}>
          Nex<span style={{color:TXT}}>staff</span>
        </div>
        <div style={{flex:1}}/>
        <div style={{display:"flex",gap:2}}>
          {[["home","Home"],["search","Search"],["explore","🗺 Map"]].map(([p,l])=>(
            <button key={p} onClick={()=>setPage(p)} style={{background:page===p?`${A}12`:"transparent",color:page===p?A:MUT,border:`1px solid ${page===p?`${A}30`:"transparent"}`,borderRadius:8,padding:"6px 10px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>{l}</button>
          ))}
        </div>
        <div style={{display:"flex",gap:6,marginLeft:8}}>
          {user
            ? <button onClick={()=>setPage("settings")} style={{width:34,height:34,borderRadius:"50%",background:`${A}15`,border:`2px solid ${A}30`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontWeight:800,color:A,fontSize:14,overflow:"hidden"}}>
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
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="What service do you need?" style={{...ss,flex:2,minWidth:150,background:"transparent",border:"none"}}/>
              <select value={selState} onChange={e=>{setSelState(e.target.value);setSelCity("");}} style={{...ss,minWidth:110,background:"#F8FAFF"}}>
                <option value="">All States</option>
                {STATES.map(s=><option key={s.name}>{s.name}</option>)}
              </select>
              <button onClick={()=>setPage("search")} style={{background:A,color:"#fff",border:"none",borderRadius:9,padding:"10px 22px",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>Search</button>
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
                <div key={c.label} onClick={()=>{setSearch(c.label);setPage("search");}} style={{background:SUR,border:`1.5px solid ${BDR}`,borderRadius:14,padding:"14px 8px",textAlign:"center",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",transition:"all 0.15s"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=A;e.currentTarget.style.transform="translateY(-2px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=BDR;e.currentTarget.style.transform="none";}}>
                  <div style={{fontSize:24,marginBottom:5}}>{c.icon}</div>
                  <div style={{color:TXT,fontSize:11,fontWeight:600}}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{padding:"0 16px 30px",maxWidth:860,margin:"0 auto"}}>
            <div style={{fontWeight:800,fontSize:18,color:TXT,marginBottom:16}}>Top Rated Professionals</div>
            {PROS.slice(0,4).map(p=><ProCard key={p.id} p={p}/>)}
            <button onClick={()=>setPage("search")} style={{width:"100%",background:SUR,border:`1.5px solid ${BDR}`,color:A,borderRadius:12,padding:"13px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"}}>View All Professionals →</button>
          </div>

          <div style={{background:`linear-gradient(135deg,${A} 0%,${A2} 100%)`,padding:"48px 16px",textAlign:"center",color:"#fff"}}>
            <div style={{fontWeight:800,fontSize:22,marginBottom:10}}>Ready to Grow Your Business?</div>
            <p style={{fontSize:14,marginBottom:24,maxWidth:380,margin:"0 auto 24px",opacity:0.9}}>Join thousands of skilled professionals who use Nexstaff to find clients.</p>
            <button onClick={()=>setAuth("signup")} style={{background:"#fff",color:A,border:"none",borderRadius:12,padding:"14px 36px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 16px rgba(0,0,0,0.15)"}}>Join as a Professional →</button>
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
            {stateObj && (
              <select value={selCity} onChange={e=>setSelCity(e.target.value)} style={{...ss,minWidth:110}}>
                <option value="">All Cities</option>
                {stateObj.cities.map(c=><option key={c}>{c}</option>)}
              </select>
            )}
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:16}}>
            {CATS.map(c=>(
              <button key={c.label} onClick={()=>setSearch(search===c.label?"":c.label)} style={{background:search===c.label?`${A}12`:SUR,color:search===c.label?A:MUT,border:`1.5px solid ${search===c.label?A:BDR}`,borderRadius:20,padding:"5px 11px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}>{c.icon} {c.label}</button>
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

      {/* EXPLORE */}
      {page==="explore" && (
        <div style={{maxWidth:860,margin:"0 auto",padding:"26px 16px"}}>
          <div style={{fontWeight:800,fontSize:20,color:TXT,marginBottom:6}}>Explore by Location</div>
          <p style={{color:MUT,fontSize:13,marginBottom:18}}>Select a state to find professionals near you</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:10}}>
            {STATES.map(s=>(
              <div key={s.name} onClick={()=>{setSelState(s.name);setSelCity("");setSearch("");setPage("search");}} style={{background:SUR,border:`1.5px solid ${BDR}`,borderRadius:14,padding:"16px",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",transition:"all 0.15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=A;e.currentTarget.style.transform="translateY(-2px)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=BDR;e.currentTarget.style.transform="none";}}>
                <div style={{fontWeight:700,fontSize:13,color:TXT,marginBottom:3}}>{s.name}</div>
                <div style={{color:FNT,fontSize:11}}>{s.cities.length} cities</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{borderTop:`1px solid ${BDR}`,padding:"24px 16px",textAlign:"center",background:SUR}}>
        <div style={{fontWeight:800,fontSize:16,marginBottom:6,color:A}}>Nex<span style={{color:TXT}}>staff</span></div>
        <div style={{color:FNT,fontSize:11}}>Professional Services Platform · © 2025 Nexstaff Technologies Ltd</div>
      </div>

      {auth && <AuthModal mode={auth} onClose={()=>setAuth(null)} onDone={(u)=>{setUser({...u,name:u.name});setAuth(null);}} onProviderSignup={(u)=>{setUser({...u});setAuth(null);setShowOnboarding(true);}}/>}
    </div>
  );
}