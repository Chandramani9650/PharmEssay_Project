import Categories from "./Categaries"
import MiddleHome from "./MiddleHome";

function DataStorage({CategoryData}){

  const Data = {
   ProductType:[
    {image:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",title:"Medicine",discount:"UPTO 25% OFF"},
    {image:"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",title:"Lab Tests",discount:"UPTO 70% OFF"},
    {image:"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",title:"Health care",discount:"UPTO 60% OFF"},
    {image:"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",title:"Health Blog",discount:""},
    {image:"https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",title:"PLUS",discount:"UPTO 5% OFF"},
    {image:"https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",title:"Offer",discount:""},
    {image:"https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",title:"Value Store",discount:"UPTO 50%"},
   ],
   SlideData:[
   {image:"https://cdn01.pharmeasy.in/dam/banner/banner/af7eca79a24-25.jpg"},
   {image:"https://cdn01.pharmeasy.in/dam/banner/banner/f8b653efff8-fb999.jpg"},
   {image:"https://cdn01.pharmeasy.in/dam/banner/banner/d74fbde8ea0-Slippers.jpg"},
   {image:"https://cdn01.pharmeasy.in/dam/banner/banner/480aa5499c8-flashhp.jpg"}
   ],

   LabTestData:[
    {image:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0"},
    {image:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0"},
    {image:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0"},
    {image:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0"},
    {image:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=256x0"},
    {image:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0"},
    {image:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/6b775dd8478-covid.png?dim=256x0"},
    {image:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0"},
    {image:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=256x0"},
    {image:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0"}
   ],

   CategoryData:[
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=256x0",title:"Top Product"},
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png?f=png?dim=256x0",title:"Elderly care"},
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=256x0",title:"Personal care"},
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png?f=png?dim=256x0",title:"Healthcare Devices"},
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png?dim=256x0",title:"Health food and care"},
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ce48d6d71ace3892945f0b0a64c1f0e9.png?f=png?dim=256x0",title:"Skin care"},
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/11315fee93053980af48fd871bf687b8.png?f=png?dim=256x0",title:"Mother and baby care"},
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4405b7900b0b34fcb5c8572aae9d4b2e.png?f=png?dim=256x0",title:"Accessories & wearables"},
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png?dim=256x0",title:"Fitness supplement"},
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0",title:"Ayurvedic Care"},
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/af7a9b53ad1239659615c6895b0972d7.png?f=png?dim=256x0",title:"Sexual Wellness"},
    {image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/bde7d1752b5e3cd69f42157f4d578535.png?f=png?dim=256x0",title:"Mega Clearance"},

   ],

   NewLaunch:[
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/F62337/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-30-tablets-2-1705307308.jpg?dim=720x0",title:"Pharmeasy Multivitamin....", MRP:"394.00",price:"191.95", discount:"45%"},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-2-1707378524.jpg?dim=720x0",title:"Pharmeasy Fish Oil 1000mg Soft Gelatin", MRP:"399.00",price:"279.30", discount:"30%"},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/Y67472/new-i-site-plus-strip-of-10-tablets-2-1700739837.jpg?dim=720x0",title:"New I Site Plus Strip Of 10 Tablets", MRP:"297",price:"291.06", discount:"2%"},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/Z47706/sugar-free-gold-500-pellets-with-free-sugar-free-green-40gm-powder-2-1708427099.jpg?dim=720x0",title:"Sugar Free Gold 500 Pellets With Free", MRP:"",price:"", discount:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/U52681/pharmeasy-multivitamin-and-pharmeasy-calcium-magnesium-vitamin-d3-tablets-pack-of-260-combo-pack-6.1-1708504260.jpg?dim=720x0",title:"", MRP:"",price:"", discount:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/J87502/baidyanath-nagpur-sidpiles-ayurvedic-piles-medicine-50-tablets-2-1677246373.jpg?dim=720x0",title:"Pharmeasy Multivitamin + Calcium Com", MRP:"",price:"", discount:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/L07650/durex-real-feel-condoms-pack-of-10-2-1685367850.jpg?dim=720x0",title:"Baidyanath Nagpur Sidpiles, Ayurvedic Piles Medicine, 50", MRP:"",price:"", discount:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/D44647/harpic-power-plus-10x-advanced-original-fresh-toilet-cleaner-bottle-of-500ml-2-1705309530.jpg?dim=720x0",title:"", MRP:"",price:"", discount:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/Q13555/volini-joint-xpert-pain-relief-gel-tube-of-50gm-2-1705324367.jpg?dim=720x0",title:"Durex Real Feel Condoms Pack Of 10", MRP:"",price:"", discount:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/H17394/fixderma-shadow-50-gel-75g-2-1671743866.jpg?dim=720x0",title:"Harpic Power Plus 10x Advanced Original", MRP:"",price:"", discount:""}

   ],
   TrandingData:[
    {image:"https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=1440x0",title:"Liveasy Wellness Calcium Magnesium",MRP:"394.00",price:"191.95", discount:"45%"},
    {image:"https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1698385993.jpg?dim=1440x0",title:"Liveasy Wellness Calcium Magnesium",MRP:"394.00",price:"191.95", discount:"45%"},
    {image:"https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-2-1679999355.jpg?dim=1440x0",title:"Liveasy Wellness Calcium Magnesium",MRP:"394.00",price:"191.95", discount:"45%"},
    {image:"https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1683208555.jpg?dim=1440x0",title:"Liveasy Wellness Calcium Magnesium",MRP:"394.00",price:"191.95", discount:"45%"},
    {image:"https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1690272738.jpg?dim=1440x0",title:"Liveasy Wellness Calcium Magnesium",MRP:"394.00",price:"191.95", discount:"45%"},
    {image:"https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablet-with-essential-zinc-vitamins-for-daily-immunity-energy-2-1677155713.jpg?dim=1440x0",title:"Liveasy Wellness Calcium Magnesium",MRP:"394.00",price:"191.95", discount:"45%"},
    {image:"https://cdn01.pharmeasy.in/dam/products_otc/F01746/pharmeasy-optima-all-in-one-vaporizer-2-1697003288.jpg?dim=1440x0",title:"Liveasy Wellness Calcium Magnesium",MRP:"394.00",price:"191.95", discount:"45%"},
    {image:"https://cdn01.pharmeasy.in/dam/products_otc/192351/i-pill-emergency-contraceptive-pill-2-1672279640.jpg?dim=1440x0",title:"Liveasy Wellness Calcium Magnesium",MRP:"394.00",price:"191.95", discount:"45%"},{image:"https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=1440x0",title:"Liveasy Wellness Calcium Magnesium",MRP:"394.00",price:"191.95", discount:"45%"}
   ],
   Labtest:[
    {title:"Comprehensive Full Body Checkup Test with Vitamin D & B12",desc:"Measures Vitamin D & B12 levels and other essential parameters",price_discount:"4899",actual_price:"1799"},
    {title:"Comprehensive Full Body Checkup Test with Vitamin D & B12",desc:"Measures Vitamin D & B12 levels and other essential parameters",price_discount:"4899",actual_price:"1799"},
    {title:"Comprehensive Full Body Checkup Test with Vitamin D & B12",desc:"Measures Vitamin D & B12 levels and other essential parameters",price_discount:"4899",actual_price:"1799"},
    {title:"Comprehensive Full Body Checkup Test with Vitamin D & B12",desc:"Measures Vitamin D & B12 levels and other essential parameters",price_discount:"4899",actual_price:"1799"},
   
   ],


   Essential_well:[
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/I11042/softovac-constipation-powder-bottle-of-100-g-2-1683895590.jpg?dim=1440x0",title:"Softovac Constipation Powder Bottle Of 100 G",price_discount:"195.00",actual_price:"149.24", discount:"24%"},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/194710/evion-forte-capsule-10s-2-1671740837.jpg?dim=1440x0",title:"Evion Forte Strip Of 10 Capsules",price_discount:"234.90",actual_price:"200.00",discount:"23%"},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/I44597/sugar-free-gold-sweetener-powder-jar-of-100-g-2-1688468351.jpg?dim=1440x0",title:"Sugar Free Gold Sweetener Powder Jar Of",price_discount:"213.12",actual_price:"219.89",discount:"12%"},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/013241/aptivate-pineapple-appetite-stimulating-syrup-bottle-of-450-ml-2-1676365685.jpg?dim=1440x0",title:"Aptivate Pineapple Appetite Stimulating",price_discount:"129.23",actual_price:122.23,discount:"40%"},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/055866/diataal-d-multivitamin-with-vitamin-d-for-heart-health-strong-bones-immunity-health-10-capsules-6.1-1707900348.jpg?dim=1440x0",title:"Diataal-D Multivitamin With Vitamin D For Heart",price_discount:"231",actual_price:"211",discount:"23"},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/F21086/shelcal-500mg-bottle-of-40-tablets-2-1692174719.jpg?dim=1440x0",title:"Shelcal 500mg Bottle Of 40 Tablets",price_discount:"421.12",actual_price:"321.40",discount:""},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/D95288/onetouch-select-plus-simple-glucometer-free-10-test-strips-10-sterile-lancets-1-lancing-device-3-1700200875.jpg?dim=1440x0",title:"",price_discount:"",actual_price:"",discount:""},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/X40196/onetouch-verio-flex-glucometer-machine-free-10-test-strips-10-sterile-lancets-1-lancing-device-2-1699452152.jpg?dim=1440x0",title:"",price_discount:"",actual_price:"",discount:""},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/G34072/nutrabay-wellness-fish-oil-omega-3-1000mg-60-capsules-2-1701948561.jpg?dim=1440x0",title:"",price_discount:"",actual_price:"",discount:""},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/B68988/nutrabay-pro-fish-oil-omega-3-triple-strength-1000mg-60-capsules-2-1701949359.jpg?dim=1440x0",title:"",price_discount:"",actual_price:"",discount:""},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/V02315/pharmeasy-diabetic-protein-powder-chocolate-flavour-400g-2-1692619261.jpg?dim=1440x0",title:"",price_discount:"",actual_price:"",discount:""},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/334110/owash-ultra-mild-oily-skin-wash-2-1669655281.jpg?dim=1440x0",title:"",price_discount:"",actual_price:"",discount:""},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/V95116/omron-hem-6161-fully-automatic-wrist-blood-pressure-monitor-with-intellisense-technology-1-1671744043.jpg?dim=1440x0",title:"",price_discount:"",actual_price:"",discount:""},
      {image:"https://cdn01.pharmeasy.in/dam/products_otc/J29227/everherb-by-pharmeasy-fat-burnernatural-herbal-blendaccelerates-calorie-burning-60-non-veg-2-1706687761.jpg?dim=1440x0",title:"",price_discount:"",actual_price:"",discount:""}
   ]
   ,
   FeatureBrand:[
    {image:"https://cms-contents.pharmeasy.in/carousel_item/c9fc0cd6ef6-Revital-min.png?dim=1440x0",title:"Revital"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/38d56bb7fc4-BontressFB.png?dim=1440x0", title:"Bontress"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/40facc7fa28-Pharmeasy-App.jpg?dim=1440x0", title:"Pharmeasy"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/f067321201c-1.png?dim=1440x0", title:"Nicotex"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/d1826d1c7ad-1.png?dim=1440x0", title:"Neurobion"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/611be7f660e-SugarfreeFB.png?dim=1440x0", title:"Neurobion"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/2edd79f25fd-Evion.jpg?dim=1440x0", title:"suger free"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/2f3e832e341-Everherb-min.png?dim=1440x0", title:"Evison"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/817349f6d58-2.png?dim=1440x0",title:"Diatal"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/88d71d2fad4-App_Featured-brand.jpg?dim=1440x0",title:"Lacto Calamine"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/e642f1b8237-Glucon_D.jpg?dim=1440x0",title:"Ever Herb"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/98de77fb574-Groviva.jpg?dim=1440x0",title:"Friends"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/f9d13fa5364-Teddy.jpg?dim=1440x0",title:"Glucose-D"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/9ce464f0f3f-upglam.jpg?dim=1440x0",title:"Grovia"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/201210bc27d-App_Huggies.jpg?dim=1440x0",title:"Teddy"},
    {image:"https://cms-contents.pharmeasy.in/carousel_item/5fd66ffb18a-Good-Skyn.jpg?dim=1440x0",title:"Upglam"}
   ],
   IntheSpotlight:[
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1698385993.jpg?dim=256x0",title:"", price_discount:"", actual_price:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=256x0",title:"", price_discount:"", actual_price:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/G67452/pharmeasy-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-6.1-1708149179.jpg?dim=256x0",title:"", price_discount:"", actual_price:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/D52223/liveasy-foods-healthy-roasted-seed-mix-blend-of-6-fibre-rich-healthy-roasted-seeds-200-gms-2-1656420865.jpg?dim=256x0",title:"", price_discount:"", actual_price:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1698386136.jpg?dim=256x0",title:"", price_discount:"", actual_price:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/E07034/liveasy-wellness-diabetic-protein-blood-sugar-weight-management-french-vanilla-400g-jar-2-1698385317.jpg?dim=256x0",title:"", price_discount:"", actual_price:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/E16289/pharmeasy-orthopaedic-electric-heat-belt-regular-2-1671742418.jpg?dim=256x0",title:"", price_discount:"", actual_price:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/Y12967/liveasy-ortho-care-acupressure-slippers-men-black-size-7-2-1674619066.jpg?dim=256x0",title:"", price_discount:"", actual_price:""},
  {image:"https://cdn01.pharmeasy.in/dam/products_otc/O35559/liveasy-essentials-womens-diabetic-orthopedic-slippers-red-size-uk-8-us-11-6.1-1693899504.jpg?dim=256x0",title:"", price_discount:"", actual_price:""}
 

   ],

   SlideimageData:[
    {image:"https://cdn01.pharmeasy.in/dam/banner/banner/b1b928357fc-Littles.jpg?dim=1440x0"},
    {image:"https://cdn01.pharmeasy.in/dam/banner/banner/810889b6613-babycare-min.png?dim=1440x0"},
    {image:"https://cdn01.pharmeasy.in/dam/banner/banner/5e9dc201ab9-DevicesClearanceStore.jpg?dim=1440x0"},
    {image:"https://cdn01.pharmeasy.in/dam/banner/banner/ed87375d79f-DiabeticCare-min.png?dim=1440x0"},
    {image:"https://cdn01.pharmeasy.in/dam/banner/banner/ee420d12d95-category_Sexual-wellnes.jpg?dim=1440x0"},
    {image:"https://cdn01.pharmeasy.in/dam/banner/banner/03b538c95bb-abcfd6435fe-FragSB.jpeg?dim=1440x0"},
    {image:"https://cdn01.pharmeasy.in/dam/banner/banner/26e74905fde-d91d8a17483-b80e93634e8-Now-never_CB.jpg?dim=1440x0"},
    {image:"https://cdn01.pharmeasy.in/dam/banner/banner/041c47e32a2-CB_Beauty.jpg?dim=1440x0"},
    {image:"https://cdn01.pharmeasy.in/dam/banner/banner/9b42ab4d9ab-home-page-banner_nutrition-.jpg?dim=1440x0"},
    {image:"https://cdn01.pharmeasy.in/dam/banner/banner/cea76587546-Personal-care_c.jpg?dim=1440x0"}
   ],
   HealthArticles:[
    {image:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/02/27074509/378.jpg?dim=1440x0", title:"Yoga Asanas for Hair Growth: A Comprehensive Research-Based Guide"},
    {image:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/01/27073631/365.jpg?dim=1440x0", title:"Yoga for Constipation: Effective Poses for Digestive Relief"},
    {image:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/02/26094442/449.jpg?dim=1440x0", title:"Low Platelet Count: Understanding Causes and Tips for Improving Platelet Levels  "},
    {image:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/02/26093504/456.jpg?dim=1440x0", title:"Low RBC Count: A Comprehensive Guide to Causes and Remedies"},
    {image:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/02/26091715/458.jpg?dim=1440x0", title:"High MCH: Understanding Its Implications and Causes Based on"},
    {image:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/02/26085254/460.jpg?dim=1440x0", title:"Can CBC Test Detect Cancer? Unveiling the Potential of Blood Tests"}
   
   ]


  


  }


  

    return(

        <>
        <Categories Data={Data.ProductType}  SlideData={Data.SlideData} LabTestData={Data.LabTestData}  CategoryData={Data.CategoryData} NewLaunch={Data.NewLaunch}  TrandingData={Data.TrandingData} />

        <MiddleHome Labtest={Data.Labtest}   FeatureBrand={Data.FeatureBrand} IntheSpotlight={Data.IntheSpotlight}   SlideimageData={Data.SlideimageData} HealthArticles={Data.HealthArticles}/>
        </>
    )
}
export default DataStorage;
