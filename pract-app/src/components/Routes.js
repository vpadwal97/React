import catalogue from '../assets/images/catalogue.png';
import crm from '../assets/images/crm.png';
// import oms from '../assets/images/oms.png';
import security from '../assets/images/security.png';
import global from '../assets/images/global.png';
// import tvs from '../assets/images/tvs.png';
import cms from '../assets/images/cms.png';

const Routes = [
  {
    path: "/",
    name: "Catalogue",
    icon: catalogue,
    subModule: [
      {
        path: "/category",
        subModuleName: "Category",
        subSubModule: [
          {
            path: "/category/searchCategoryMaster",
            name: "Manage Category Master",
          },
          {
            path: "/category/searchCategoryHierarchy",
            name: "Manage Category Hierarchy",
          },
          {
            path: "/category/searchCatalogueCategory",
            name: "Catalogue Category Relation Master",
          },
          {
            path: "/category/categoryBulkUpload",
            name: "Category Bulk Upload",
          },
        ],
      },
      {
        path: "/seller",
        subModuleName: "Seller",
        subSubModule: [
          {
            path: "/seller/searchSellerOnboardingMaster",
            name: "Seller Onboarding",
          },
        ],
      },
      {
        path: "/attribute",
        subModuleName: "Attribute",
        subSubModule: [
          {
            path: "/attribute/searchAttributeMaster",
            name: "Attribute Master",
          },
          {
            path: "/attribute/searchSchemaAttribute",
            name: "Manage Product Schema/Attribute",
          },
          {
            path: "/attribute/searchAttributeSet",
            name: "Manage Category-Attribute Set",
          },
        ],
      },
      {
        path: "/product",
        subModuleName: "Product",
        subSubModule: [
         {
            path: "/product/searchProductManagement",
            name: "Product Management",
          },
          {
            path: "/product/searchManageProductCategory",
            name: "Manage Product Category",
          },
          {
            path: "/product/CreateBulkUpload",
            name: "Product Bulk Upload",
          },
          {
            path: "/product/CreateBulkUploadImage",
            name: "Product Image Bulk Upload",
          },
        ],
      },
      {
        path: "/brand",
        subModuleName: "Brand",
        subSubModule: [
          {
            path: "/brand/searchBrandManagement",
            name: "Brand Management",
          },
          {
            path: "/brand/bulkUpload",
            name: "Brand Bulk Upload",
          },
        ],
      },
      {
        path: "/fullfilment",
        subModuleName: "Fullfilment Serviceability",
        subSubModule: [
          {
            path: "/fullfilment/searchGeoLocationZone",
            name: "Geo-Location Zone",
          },
          {
            path: "/fullfilment/searchGeoLocationZoneStore",
            name: "Geo-Location Zone & Store Association",
          },
          {
            path: "/fullfilment/geolocationzoneBulkUpload",
            name: "Geo-Location Zone Bulk Upload",
          },
          {
            path: "/fullfilment/geolocationZoneStoreBulkUpload",
            name: "Geo-Location Zone and Store Association Upload",
          },
        ],
      },
      {
        path: "/catalogueManagement",
        subModuleName: "Catalogue Management",
        subSubModule: [
          {
            path: "/catalogueManagement/searchCatalogueManagement",
            name: "Catalogue Management",
          },
        ],
      },
      {
        path: "/store",
        subModuleName: "Store",
        subSubModule: [
          {
            path: "/store/searchStoreMaster",
            name: "Store Management",
          },
          {
            path: "/store/storeBulkUpload",
            name: "Store Bulk Upload",
          },
        ],
      },
      {
        path: "/checkoutManagement",
        subModuleName: "Checkout Management",
        subSubModule: [
          {
            path: "/checkoutManagement/searchPaymentModeMaster",
            name: "Payment Mode Master",
          },
          {
            path: "/checkoutManagement/searchPaymentGroupManagement",
            name: "Payment Group Management",
          },
        ],
      },
    ]
  },
  {
    path: "/",
    name: "Organization",
    icon: crm,
    subModule: [
      {
        path: "organization",
        subModuleName: "Organization",
        subSubModule: [
          {
            path: "organization/searchOrganization",
            name: "Organization Master",
          },
        ],
      }
    ]
  },
  {
    path: "/",
    name: "User & Security",
    icon: security,
    subModule: [
      {
        path: "/manageUser",
        subModuleName: "Manage User",
        subSubModule: [
          {
            path: "/manageUser/searchUserOnboarding",
            name: "User Onboarding",
          },
          {
            path: "/manageUser/searchUserGrpManage",
            name: "User Group Management",
          }
        ],
      },
    ]
  },
  {
    path: "/",
    name: "Global",
    icon: global,
    subModule: [
      {
        path: "/geolocation",
        subModuleName: "GeoLocation",
        icon: global,
        subSubModule: [
          {
            path: "geolocation/searchcountrymaster",
            name: "Country Master Defination",
          },
          {
            path: "geolocation/searchStateMaster",
            name: "State Master Defination",
          },
          {
            path: "geolocation/searchCityMaster",
            name: "City Master Defination",
          },
          {
            path: "geolocation/searchZipcodeMaster",
            name: "ZipCode Master Defination",
          },
          {
            path: "geolocation/CountryBulkUpload",
            name: "Country Master Bulk Load",
          },
          {
            path: "geolocation/StateBulkUpload",
            name: "State Master Bulk Load",
          },
          {
            path: "geolocation/CityBulkUpload",
            name: "City Master Bulk Load",
          },
          {
            path: "geolocation/ZipcodeBulkUpload",
            name: "Zipcode Master Bulk Load",
          },
        ],
      },
      {
        path: "/communication",
        subModuleName: "Communication",
        icon: crm,
        subSubModule: [
          {
            path: "communication/searchTemplateDefinition",
            name: "Template Defination Master",
          },
          {
            path: "communication/searchNotifier",
            name: "Notifier Defination",
          },
        ],
      },
      {
        path: "/taxation",
        subModuleName: "Taxation",
        icon: crm,
        subSubModule: [
          {
            path: "taxation/searchTaxMaster",
            name: "Tax Master",
          },
          {
            path: "taxation/searchTaxMasterSlab",
            name: "Tax Master Slab",
          },
        ],
      },
      {
        path: "/internationalization",
        subModuleName: "Internationalization",
        icon: crm,
        subSubModule: [
          {
            path: "/internationalization/searchCurrencyMaster",
            name: "Currency Definition Master",
          },
          {
            path: "/internationalization/searchCurrencyConversion",
            name: "Currency Conversion Master",
          },
          {
            path: "/internationalization/searchLanguageDefinationMaster",
            name: "Language Definition Master",
          },
          {
            path: "/internationalization/searchGroupingMaster",
            name: "Grouping Master",
          },
          {
            path: "/internationalization/SearchOrganizationEnvVariable",
            name: "Organization Environment Variable",
          },
        ],
      },
    ],
  },
  {
    path: "/",
    name: "CMS",
    icon: cms,
    subModule: [
      {
        path: "/themeandlayout",
        subModuleName: "Theme & Layout",
        icon: cms,
        subSubModule: [
          {
            path: "themeandlayout/searchBusinessThemeCollection",
            name: "Business Theme Collection",
          },
          {
            path: "themeandlayout/searchTemplateMaster",
            name: "Template Master",
          },
          {
            path: "themeandlayout/searchCmsComponentDesign",
            name: "CMS Component Design",
          },
          {
            path: "themeandlayout/searchScreenVariantMaster",
            name: "Screen Variant Master",
          },
          {
            path: "themeandlayout/searchBusinessThemeVariantMaster",
            name: "Business Theme Variant",
          },
          {
            path: "themeandlayout/searchThemeLayoutStructure",
            name: "Theme Layout Structure",
          },
          {
            path: "themeandlayout/searchHomePage",
            name: "Home Page Template",
          },
        ],
      },
      {
        path: "/elementDataSetup",
        subModuleName: "CMS Element Data setup",
        icon: cms,
        subSubModule: [
          {
            path: "elementDataSetup/searchMediaGallary",
            name: "Manage Media Gallery",
          },
          
        ],
      },
    ],
  },
  {
    path: "/",
    name: "Seller",
    icon: security,
    subModule: [
      {
        path: "/price",
        subModuleName: "Price",
        subSubModule: [
          // {
          //   path: "/manageUser/searchUserOnboarding",
          //   name: "User Onboarding",
          // },
          //Price Management
          {
            path: "/seller/price",
            name: "Price Bulk Upload",
          },
          
          
        ],
      },
      {
        path: "/price-inventory",
        subModuleName: "Price Inventory",
        subSubModule: [
          {
            path: "/price-inventory/priceInventoryManagement",
            name: "Price Inventory Management",
          },
         
        ],
      },
      {
        path: "/seller",
        subModuleName: "Inventory",
        subSubModule: [
          {
            path: "/seller/searchInventoryManagement",
            name: "Inventory Management",
          },
          {
            path: "/seller/inventoryBulKkUpload",
            name: "Inventory Bulk Upload",
          },
        ]
      }
    ]
  }
]

export default Routes;