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
  {id:1,name:"Adewale Johnson",role:"Electrician",icon:"⚡",rating:4.9,jobs:312,city:"Ikeja",state:"Lagos",verified:true,color:"#F5A623",price:"₦5k–₦20k",av:"AJ"},
  {id:2,name:"Ngozi Okafor",role:"Photographer",icon:"📸",rating:5.0,jobs:489,city:"Victoria Island",state:"Lagos",verified:true,color:"#A78BFA",price:"₦30k–₦150k",av:"NO"},
  {id:3,name:"Emeka Obi",role:"Plumber",icon:"🔧",rating:4.7,jobs:198,city:"Abuja",state:"FCT Abuja",verified:true,color:"#4F7FFF",price:"₦3k–₦15k",av:"EO"},
  {id:4,name:"Fatima Al-Hassan",role:"Makeup Artist",icon:"💄",rating:4.8,jobs:567,city:"Kano",state:"Kano",verified:true,color:"#F472B6",price:"₦15k–₦80k",av:"FA"},
  {id:5,name:"Chidi Nwosu",role:"Barber",icon:"✂️",rating:4.6,jobs:1200,city:"Onitsha",state:"Anambra",verified:false,color:"#34D399",price:"₦500–₦2k",av:"CN"},
  {id:6,name:"Blessing Eze",role:"Hair Stylist",icon:"💈",rating:4.9,jobs:834,city:"Port Harcourt",state:"Rivers",verified:true,color:"#FB923C",price:"₦3k–₦25k",av:"BE"},
  {id:7,name:"Musa Tanko",role:"Mechanic",icon:"🚗",rating:4.5,jobs:421,city:"Kaduna",state:"Kaduna",verified:true,color:"#22D3EE",price:"₦5k–₦50k",av:"MT"},
  {id:8,name:"Amina Bello",role:"Tailor",icon:"👗",rating:5.0,jobs:276,city:"Akungba",state:"Ondo",verified:false,color:"#C084FC",price:"₦5k–₦40k",av:"AB"},
];

const A="#F5A623",BG="#0D0E14",SUR="#13141C",CRD="#1A1B26",BDR="#2A2C3E",TXT="#ECEEF7",MUT="#7B7F9E",FNT="#4A4D66",GRN="#34D399";

function ProCard({p}) {
  return (
    <div style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:14,padding:16,marginBottom:12}}>
      <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
        <div style={{width:44,height:44,borderRadius:"50%",background:p.color+"22",border:`2px solid ${p.color}55`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:p.color,flexShrink:0}}>{p.av}</div>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:3}}>
            <span style={{fontWeight:700,fontSize:14,color:TXT}}>{p.name}</span>
            {p.verified && <span style={{background:"rgba(52,211,153,0.1)",color:GRN,border:"1px solid rgba(52,211,153,0.25)",borderRadius:20,fontSize:10,fontWeight:700,padding:"1px 7px"}}>✦ VERIFIED</span>}
          </div>
          <div style={{color:MUT,fontSize:12,marginBottom:5}}>{p.icon} {p.role} · {p.city}, {p.state}</div>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{color:A,fontSize:12}}>{"★".repeat(Math.round(p.rating))}</span>
            <span style={{color:A,fontWeight:700,fontSize:12}}>{p.rating}</span>
            <span style={{color:FNT,fontSize:11}}>({p.jobs} jobs)</span>
            <span style={{color:A,fontWeight:700,fontSize:12,marginLeft:"auto"}}>{p.price}</span>
          </div>
        </div>
      </div>
      <div style={{display:"flex",gap:8,marginTop:12}}>
        <button style={{background:A,color:BG,border:"none",borderRadius:8,padding:"8px 16px",fontWeight:800,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>Book Now</button>
        <button style={{background:"transparent",color:MUT,border:`1px solid ${BDR}`,borderRadius:8,padding:"8px 14px",fontWeight:600,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>💬 Chat</button>
      </div>
    </div>
  );
}

function AuthModal({mode,onClose,onDone}) {
  const [tab,setTab] = useState(mode);
  const [step,setStep] = useState(1);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [pass,setPass] = useState("");
  const [type,setType] = useState("customer");
  const [done,setDone] = useState(false);

  const inp = {width:"100%",background:SUR,border:`1px solid ${BDR}`,color:TXT,borderRadius:9,padding:"11px 13px",fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:10,boxSizing:"border-box"};

  if (done) return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",zIndex:99,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:18,padding:32,textAlign:"center",maxWidth:320,width:"100%"}}>
        <div style={{fontSize:48,marginBottom:12}}>🎉</div>
        <div style={{color:A,fontWeight:800,fontSize:18,marginBottom:6}}>Welcome to Nexstaff!</div>
        <div style={{color:MUT,fontSize:13,marginBottom:20}}>Your account is ready.</div>
        <button onClick={onDone} style={{background:A,color:BG,border:"none",borderRadius:9,padding:"12px 32px",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>Get Started</button>
      </div>
    </div>
  );

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",zIndex:99,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{background:SUR,border:`1px solid ${BDR}`,borderRadius:18,padding:24,width:"100%",maxWidth:360,maxHeight:"90vh",overflowY:"auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
          <span style={{fontWeight:800,fontSize:17,color:TXT}}>Nex<span style={{color:A}}>staff</span></span>
          <button onClick={onClose} style={{background:"none",border:"none",color:MUT,fontSize:18,cursor:"pointer"}}>✕</button>
        </div>

        <div style={{display:"flex",background:CRD,borderRadius:9,padding:4,marginBottom:18}}>
          {["login","signup"].map(t=>(
            <button key={t} onClick={()=>{setTab(t);setStep(1);}} style={{flex:1,background:tab===t?A:"transparent",color:tab===t?BG:MUT,border:"none",borderRadius:7,padding:"9px",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>
              {t==="login"?"Log In":"Sign Up"}
            </button>
          ))}
        </div>

        <button onClick={onDone} style={{width:"100%",background:CRD,border:`1px solid ${BDR}`,color:TXT,borderRadius:9,padding:"11px",display:"flex",alignItems:"center",justifyContent:"center",gap:10,cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:600,marginBottom:12,boxSizing:"border-box"}}>
          <svg width="17" height="17" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
          </svg>
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
            <div style={{textAlign:"right",marginBottom:14}}>
              <span style={{color:A,fontSize:12,cursor:"pointer",fontWeight:600}}>Forgot password?</span>
            </div>
            <button onClick={()=>setDone(true)} style={{width:"100%",background:A,color:BG,border:"none",borderRadius:9,padding:"13px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>Log In</button>
          </>
        )}

        {tab==="signup" && (
          <>
            <div style={{display:"flex",gap:6,marginBottom:14}}>
              {[["customer","👤 Need services"],["provider","🛠 Offer services"]].map(([v,l])=>(
                <button key={v} onClick={()=>setType(v)} style={{flex:1,background:type===v?"rgba(245,166,35,0.12)":CRD,color:type===v?A:MUT,border:`1px solid ${type===v?A:BDR}`,borderRadius:9,padding:"9px 6px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{l}</button>
              ))}
            </div>
            {step===1 && (
              <>
                <input placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} style={inp}/>
                <input placeholder="Email address" value={email} onChange={e=>setEmail(e.target.value)} style={inp}/>
                <div style={{position:"relative",marginBottom:10}}>
                  <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:MUT,fontSize:13,fontWeight:600,pointerEvents:"none"}}>+234</span>
                  <input placeholder="Phone number" value={phone} onChange={e=>setPhone(e.target.value)} style={{...inp,paddingLeft:56,marginBottom:0}}/>
                </div>
                <button onClick={()=>setStep(2)} style={{width:"100%",background:A,color:BG,border:"none",borderRadius:9,padding:"13px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>Next →</button>
              </>
            )}
            {step===2 && (
              <>
                <input placeholder="Create password" type="password" value={pass} onChange={e=>setPass(e.target.value)} style={inp}/>
                <div style={{color:FNT,fontSize:11,marginBottom:14,lineHeight:1.6}}>By signing up you agree to Nexstaff's Terms of Service and Privacy Policy.</div>
                <div style={{display:"flex",gap:8}}>
                  <button onClick={()=>setStep(1)} style={{flex:1,background:CRD,color:MUT,border:`1px solid ${BDR}`,borderRadius:9,padding:"13px",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>← Back</button>
                  <button onClick={()=>setDone(true)} style={{flex:2,background:A,color:BG,border:"none",borderRadius:9,padding:"13px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>Create Account</button>
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

  const stateObj = STATES.find(s=>s.name===selState);
  const ss = {background:SUR,border:`1px solid ${BDR}`,color:TXT,borderRadius:9,padding:"10px 12px",fontSize:13,outline:"none",fontFamily:"inherit"};

  const results = PROS.filter(p=>{
    const q=search.toLowerCase();
    return (!q||p.role.toLowerCase().includes(q)||p.name.toLowerCase().includes(q))
      &&(!selState||p.state===selState)
      &&(!selCity||p.city===selCity);
  });

  return (
    <div style={{minHeight:"100vh",background:BG,color:TXT,fontFamily:"system-ui,sans-serif"}}>

      {/* NAV */}
      <div style={{background:`${SUR}EE`,borderBottom:`1px solid ${BDR}`,padding:"0 16px",height:54,display:"flex",alignItems:"center",position:"sticky",top:0,zIndex:50}}>
        <div onClick={()=>setPage("home")} style={{fontWeight:800,fontSize:17,cursor:"pointer"}}>
          <span style={{background:A,color:BG,borderRadius:6,padding:"2px 8px",marginRight:6,fontSize:14}}>N</span>
          Nex<span style={{color:A}}>staff</span>
        </div>
        <div style={{flex:1}}/>
        <div style={{display:"flex",gap:4}}>
          {[["home","Home"],["search","Search"],["explore","🗺 Map"]].map(([p,l])=>(
            <button key={p} onClick={()=>setPage(p)} style={{background:page===p?"rgba(245,166,35,0.12)":"transparent",color:page===p?A:MUT,border:`1px solid ${page===p?"rgba(245,166,35,0.2)":"transparent"}`,borderRadius:7,padding:"6px 10px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>{l}</button>
          ))}
        </div>
        <div style={{display:"flex",gap:6,marginLeft:8}}>
          {user
            ? <button onClick={()=>setUser(null)} style={{background:"transparent",border:`1px solid ${BDR}`,color:MUT,borderRadius:7,padding:"6px 12px",fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>Log out</button>
            : <>
                <button onClick={()=>setAuth("login")} style={{background:"transparent",border:`1px solid ${BDR}`,color:MUT,borderRadius:7,padding:"6px 12px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Log In</button>
                <button onClick={()=>setAuth("signup")} style={{background:A,color:BG,border:"none",borderRadius:7,padding:"6px 12px",fontWeight:800,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>Sign Up</button>
              </>
          }
        </div>
      </div>

      {/* HOME */}
      {page==="home" && (
        <div>
          <div style={{padding:"56px 16px 44px",textAlign:"center",borderBottom:`1px solid ${BDR}`,background:`linear-gradient(160deg,${SUR} 0%,${BG} 100%)`}}>
            <div style={{display:"inline-block",background:"rgba(245,166,35,0.1)",border:"1px solid rgba(245,166,35,0.2)",borderRadius:20,padding:"4px 14px",fontSize:12,fontWeight:700,color:A,marginBottom:18}}>✦ Trusted by thousands of professionals</div>
            <h1 style={{fontSize:"clamp(24px,6vw,50px)",fontWeight:800,lineHeight:1.1,marginBottom:12,color:TXT}}>Find Skilled <span style={{color:A}}>Professionals</span><br/>In Your City</h1>
            <p style={{color:MUT,fontSize:15,maxWidth:420,margin:"0 auto 30px",lineHeight:1.7}}>Discover verified electricians, photographers, tutors, barbers and more — right in your neighbourhood.</p>
            <div style={{display:"flex",gap:8,maxWidth:540,margin:"0 auto",flexWrap:"wrap",justifyContent:"center"}}>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="What service do you need?" style={{...ss,flex:2,minWidth:160}}/>
              <select value={selState} onChange={e=>{setSelState(e.target.value);setSelCity("");}} style={{...ss,minWidth:120}}>
                <option value="">All States</option>
                {STATES.map(s=><option key={s.name}>{s.name}</option>)}
              </select>
              <button onClick={()=>setPage("search")} style={{background:A,color:BG,border:"none",borderRadius:9,padding:"10px 22px",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>Search</button>
            </div>
          </div>

          <div style={{display:"flex",justifyContent:"center",gap:"clamp(18px,5vw,52px)",padding:"22px 16px 28px",borderBottom:`1px solid ${BDR}`,flexWrap:"wrap"}}>
            {[["3,200+","Verified Pros"],["36","States"],["16+","Services"],["18k+","Jobs Done"]].map(([n,l])=>(
              <div key={l} style={{textAlign:"center"}}>
                <div style={{fontSize:22,fontWeight:800,color:A}}>{n}</div>
                <div style={{fontSize:12,color:MUT,marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{padding:"30px 16px",maxWidth:860,margin:"0 auto"}}>
            <div style={{fontWeight:800,fontSize:17,color:TXT,marginBottom:14}}>Browse by Category</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(95px,1fr))",gap:9}}>
              {CATS.map(c=>(
                <div key={c.label} onClick={()=>{setSearch(c.label);setPage("search");}} style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:12,padding:"13px 8px",textAlign:"center",cursor:"pointer"}}>
                  <div style={{fontSize:22,marginBottom:5}}>{c.icon}</div>
                  <div style={{color:TXT,fontSize:11,fontWeight:600}}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{padding:"0 16px 30px",maxWidth:860,margin:"0 auto"}}>
            <div style={{fontWeight:800,fontSize:17,color:TXT,marginBottom:14}}>Top Rated Professionals</div>
            {PROS.slice(0,4).map(p=><ProCard key={p.id} p={p}/>)}
            <button onClick={()=>setPage("search")} style={{width:"100%",background:"transparent",border:`1px solid ${BDR}`,color:MUT,borderRadius:9,padding:"12px",fontWeight:600,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>View All Professionals →</button>
          </div>

          <div style={{background:SUR,borderTop:`1px solid ${BDR}`,padding:"44px 16px",textAlign:"center"}}>
            <div style={{fontWeight:800,fontSize:20,color:TXT,marginBottom:10}}>Ready to Grow Your Business?</div>
            <p style={{color:MUT,fontSize:14,marginBottom:22,maxWidth:380,margin:"0 auto 22px"}}>Join thousands of skilled professionals who use Nexstaff to find clients.</p>
            <button onClick={()=>setAuth("signup")} style={{background:A,color:BG,border:"none",borderRadius:10,padding:"13px 34px",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>Join as a Professional →</button>
          </div>
        </div>
      )}

      {/* SEARCH */}
      {page==="search" && (
        <div style={{maxWidth:860,margin:"0 auto",padding:"26px 16px"}}>
          <div style={{fontWeight:800,fontSize:19,color:TXT,marginBottom:16}}>Find a Professional</div>
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
              <button key={c.label} onClick={()=>setSearch(search===c.label?"":c.label)} style={{background:search===c.label?"rgba(245,166,35,0.12)":CRD,color:search===c.label?A:MUT,border:`1px solid ${search===c.label?A:BDR}`,borderRadius:20,padding:"5px 11px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}>{c.icon} {c.label}</button>
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
          <div style={{fontWeight:800,fontSize:19,color:TXT,marginBottom:6}}>Explore by Location</div>
          <p style={{color:MUT,fontSize:13,marginBottom:18}}>Select a state to find professionals near you</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:10}}>
            {STATES.map(s=>(
              <div key={s.name} onClick={()=>{setSelState(s.name);setSelCity("");setSearch("");setPage("search");}} style={{background:CRD,border:`1px solid ${BDR}`,borderRadius:12,padding:"14px",cursor:"pointer"}}>
                <div style={{fontWeight:700,fontSize:13,color:TXT,marginBottom:3}}>{s.name}</div>
                <div style={{color:FNT,fontSize:11}}>{s.cities.length} cities</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{borderTop:`1px solid ${BDR}`,padding:"22px 16px",textAlign:"center"}}>
        <div style={{fontWeight:800,fontSize:15,marginBottom:5}}>Nex<span style={{color:A}}>staff</span></div>
        <div style={{color:FNT,fontSize:11}}>Professional Services Platform · © 2025 Nexstaff Technologies Ltd</div>
      </div>

      {auth && <AuthModal mode={auth} onClose={()=>setAuth(null)} onDone={()=>{setUser({});setAuth(null);}}/>}
    </div>
  );
}