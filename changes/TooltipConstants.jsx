export const TooltipMessages = {
  Country: {
    Search: {
      Code: "Country Code | Length : 4",
      Status: "Is Country Active? (Yes/No)",
    },
    CreateEdit: {
      countryId: "Country ID",
      countryCode: "Country Code| Mandatory ",
      countryName: "Country Name| Mandatory | Length : 204",
      countryPhoneCode: "Country Phone Code | Mandatory | Length : 4",
      latitude: "Latitude | Length : 52",
      longitude: "Longitude | Length : 52",
      groupinUsed: "Grouping Used",
      maxFractionDigit: "Max Fraction Digit",
      countryLocale: "Country Locale",
      isactive: "Is Country Active? (Yes/No)| Mandatory",
      selectImageData: "Country Logo",
      languageDataSelect: "Select Language",
      currencyDataSelect: "Select Currency Type",
    },
  },
  StateMaster: {
    Search: {
      Code: "State Code | Length : 4",
      DataSelect: "Select Country ",
      Active_Status: "Is State status Active? (Yes/No)",
    },
    CreateEdit: {
      internalSystemId: "Internal System Id",
      Code: "State Code | Mandatory | Length : 4",
      Name: "State Name | Mandatory | Length : 204",
      DataSelect: "Select Country",
      Active_Status: "Is State status Active? (Yes/No) | Mandatory",
    },
  },
  CityMaster: {
    CreateEdit: {
      internalSystemId: "Reference number ",
      CityCode: "City Code | Length : 8",
      CityName: "CityName",
      countryData: "countryDataSelect",
      stateData: "stateDataSelect",
      isactive: "isactive",
    },
    Search: {
      internalSystemId: "Reference number ",
      CityCode: "City Code | Length : 8",
      CountryData: "CountryData",
      StateData: "StateDataSelect",
      Active_Status: "Active_Status",
    },
  },
  ZipcodeMaster: {
    Search: {
      locationCode: "Location Code | Length : 52",
      countryData: "Select Country ",
      stateData: "Select State ",
      cityData: "Select City ",
      Active_Status: "Active_Status",
    },
    CreateEdit: {
      locationCode: "Location Code | Mandatory | Length : 52",
      countryData: "Select Country | Mandatory",
      longitude: "Longitude",
      stateData: "Select State | Mandatory ",
      cityData: "Select City | Mandatory",
      pincode: "Enter Pincode | Mandatory | Length : 16",
      district: "Enter District | Length : 204",
      location: "Enter Location | Length : 104",
      latitude: "Latitude",
      Active_Status: "Is Location Status Active? (Yes/No)",
    },
  },
  StoreManagement: {
    Search: {
      StoreRfnum: "Reference No. for Store",
      VendorRfnum: "Select Seller",
      LegalName: "Store Legal Name | Length : 104",
      Code: "Store Code | Length : 104",
      Active: "Is Store Active? (Yes/No)",
    },
    CreateEdit: {
      opentime: "Opening Time | Mandatory",
      closetime: "Closing Time | Mandatory",
      storerfnum: "Reference No. for Store",
      store_fname: "Vendor First Name | Mandatory | Length : 104",
      store_lname: "Store Legal Name | Mandatory | Length : 104",
      store_shopno: "Shop No | Mandatory | Length : 26",
      store_bname: "Business Name | Mandatory | Length : 104",
      store_emailid: "Store Email ID | Mandatory | Length : 204",
      store_mobile: "Store Mobile Number | Length : 15",
      store_phone: "Store Phone Number | Length : 15",
      detail_addr1: "Store Address 1 | Mandatory | Length : 820",
      detail_addr2: "Store Address 2 | Length : 820",
      locality: "Store Locality | Mandatory | Length : 80",
      detail_latticord:
        "Geographic Latitide of Store | Mandatory | Length : 104",
      detail_Longicord:
        "Geographic Longitude of Store | Mandatory | Length : 104",
      store_cndannualto_code: "Annual Turn Over of Store | Length : 80",
      store_countrycode: "Select Country | Mandatory",
      store_statecode: "Select State | Mandatory ",
      store_citycode: "Select City | Mandatory ",
      maxAllowedDeliveryDay: "Delivery Days | length 3",
      store_soldby: "Seller Name | Length : 80",
      storeurl: "Link of Store | Length : 204",
      fax: "Store Fax No. | Length : 80",
      aboutUs: "Information about Store | Length : 1638",
      ssirating: "Store Rating | Length : 16",
      detail_zip: "Store Zip Code",
      storeSequence: "Sequence | length 3",
      storeMapLink: "Store Map Link",
      Warehouse: "Is WareHouse Available? (Yes/No)",
      Online: "Is Web/Online? (Yes/No)",
      Fulfilment:
        "Does store has an ability to fulfill an order itself? (Yes/No)",
      Active: "Is Store Active? (Yes/No)",
      Default: "Is Default Store? (Yes/No)",
      PickUp: "Is Pick Up Store ? (YES/NO)",
      Delivery: "Is Delivery Store",
      Display: "Is Display",
      Store: "Is Store Available? (Yes/ No)",
      storeLogoSrc: "store detail Entity-192 x 192 pix",
      parentssiCode: "ParentssiCParent Store/Warehouseode",
      store_parkingopt: "Parking Available For",
      holidayCalDropDown: "",
    },
  },
  Manage_Product_Category: {
    Search: {
      childCategoryData: "Child Category",
      Category: "Category",
      ChildCategory: "ChildCategory",
      ChildCategory2: "ChildCategory2",
      productCode: "ProductCode",
    },
    CreateEdit: {},
  },
  CategoryMaster: {
    Search: {
      categoryRfnum: "Reference Number of the Category [ System Generated ]",
      categoryName: "Name of the Category | Length : 204",
      categoryCode: "Code for the Category | Length : 204",
      isActive: "Category Active Status ? [ Yes/No ]",
    },
    CreateEdit: {
      categoryRfnum: "Reference Number of the Category [ System Generated ]",
      name: "Name of the Category | Mandatory | Length : 204",
      nmkey: "Name key for the category | Length : 100",
      srkey: "Search key for the category | Length : 100",
      code: "Code for the Category | Mandatory | Length : 204",
      desc: "Description for the Category | Mandatory | Length : 4000",
      isActive: "Category Active Status ? [ Yes/No ]",
      metatitle: "SEO Meta Title for the category | Mandatory | Length : 204",
      metadesc: "SEO Meta Description for Category | Length : 1638",
      metakeyword: "SEO Meta Keywords for Category | Length : 1638",
      categoryLogoSrc: "Category Logo",
      categoryImageSrc: "Category Logo",
    },
  },
  CategoryHierarchy: {
    Search: {
      CategoryChild:
        "Lower Category level(can be L2 or L3 but must have association with higher tier level)",
      CategoryParent: "Higher Category level(can be L1 or L2 category)",
    },
    CreateEdit: {
      categoryList:
        "Which Sequence wise categories need to be displayed | Length : 16",
      isTopCategory: "",
      parentCategoryList: "",
      categorySequence:
        "Which Sequence wise categories need to be displayed | Length : 16",
    },
  },
  catalogueCategory: {
    Search: {
      catalogueCategoryRfnum: "",
      categoryCode: "Select Catalogue Name associated with Category ",
      catalogue: "Code for the Category | Length : 204",
      isActive: "",
    },
    CreateEdit: {
      catalogueCategoryRelationRfnum:
        "Reference number of Catalogue Categories relation [ System Generated ]",
      categoryCode:
        "Category Code for configuring  Catalogue Category Relation. | Mandatory | Length : 204",
      catalogueCode:
        "Select Catalogue Name needs to be associated with the category | Mandatory",
      isProductCategory: "",
      isTopCategory: "",
      isActive: "",
      catalogueCategoryBelow:
        "Header Templates  to be used for Categories and below Categories",
      catalogueCategoryUnder:
        "Header Template to be used for Products under this Categories ",
    },
  },
  SellerOnboardingMaster: {
    Search: {
      rfnum: "Seller Reference Number [ System Generated ]",
      classList: "Select Seller Standard Type",
      storeTypeList: "Select Seller Store Type",
      isactive: "Is Seller Onboarding Status Active? (Yes/No)",
    },
    CreateEdit: {
      // sellerrfnum
      firstName: "Seller's First Name | Mandatory | Length : 104",
      lastName: "Seller's Last Name | Mandatory | Length : 104",
      sellername: "Seller Name | Mandatory | Length : 104",
      sellercode: "Seller Code | Mandatory | Length : 12",
      selleremail: "EmailID of Seller | Mandatory | Length : 204",
      sellerbusinessname: "Bussiness Name of Vendor | Mandatory | Length : 104",
      industryCode: "Type of Industy Vendor belong | Length : 160",
      vendorcurrency: "Currency type used by Seller | Mandatory",
      vendortype: "Select Seller Standard Type",
      storetype: "Select Seller Store Type",
      returndays: "Max Product Return date | Length : 8",
      extpaymentterm: "Payment Term | Length : 16",
      cstno: "Central Sales tax number of Seller | Length : 16",
      tradelicenseno: "Trade License Number | Length : 80",
      vatno: "value added tax number | Length : 104",
      tinno: "Taxpayer Identification Number | Length : 16",
      onboarddate: "Registration date",
      expirydate: "Expiry Date",
      description: "Information about Seller | Length : 1024",
      billemail: "Seller Billing Email ID | Mandatory | Length : 204",
      billcontact: "Seller Billing Contact Number | Length : 15",
      billaltcontact: "Seller Billing Alternate Contact Number | Length : 15",
      billaddress1: "Seller Billing Address 1 | Length : 80",
      billaddress2: "Seller Billing Address 2 | Length : 80",
      billaddress3: "Seller Billing Address 3 | Length : 80",
      countryCode: "Select Seller Billing Country| Mandatory",
      stateCode: "Select Seller Billing State| Mandatory ",
      cityCode: "Select Seller Billing City| Mandatory ",
      zipCode: "Select Seller Billing City Pincode| Mandatory ",
      bankName: "Seller Bank Name | Length : 204",
      accountName: "Seller Account Name | Length : 204",
      accountNo: "Seller Account Number | Length : 204",
      isActive: "Is Seller BankStatus Active( Yes/No)",
      isdefaultvendor: "",
      sellerLogoSrc: "Seller Logo",
      documentName: "Seller Document Information | Length : 204",
      uploadFile: "Upload File",
    },
  },
  ManageSchema: {
    CreateNewModal: {
      Name: "Name for Attribute | Mandatory | Length : 104",
      Code: "Code for Attribute | Mandatory | Length : 52",
      Desc: "Description for Attribute | Mandatory | Length : 1638",
      IsDef: "Is Keyword Group Active? (Yes/No)",
      IsActive: "Is Keyword Group Active? (Yes/No)",
    },
    EditAttributeGrpModal: {
      keywordGroupRfnum:
        "Reference Number of Attribute Group [System Generated]",
      Name: "Attribute Name [Alphabet, Number, Special_Characters, Max_128_Characters]",
      Code: "Attribute Code [Alphabet, Number, Special_Characters, Max_64_Characters]",
      Desc: "Attribute Description [Alphabet, Number, Special_Characters, Max_2048_Characters]",
      VariantIdentifierStrategy: "",
      pImg: "",
      pthumbImg: "",
      pzoomImg: "",
      pcategoryImg: "",
      DefaultProductScreenVariant: "Default Product Screen Variant",
      IsDef: "",
      IsActive: "",
    },
    AddButtonModal: {
      attrSelect: "Attribute Name | Mandatory",
      defRule: "",
      schemaTitle: "Schema Attribute Title",
      seq: "Sequence for Keyword | Length : 8",
      dataValSelect: "Select any one validation from list",
      valMsg: "",
      valReg: "",
      disAttrSelect: "Is Display Attribute",
      selectedOptionApplied: "Is the product Leading product? (Yes/No)",
      classAttr: "Does the product has Variants? (Yes/No) | Mandatory",
      leadVar: "Is the product Leading product? (Yes/No)",
      moentary: "Is Monetary?(Yes/No)",
      proComp: "Can the product be compared? (Yes/No)",
      inclFilter: "Can the product be filtered?  (Yes/No)",
      indexable: "",
      mandtory: "Is Mandatory?(Yes/No)",
      selectedOptionVisibilty: "Is Display",
    },
    ManageAttributeModal: {
      attrSelectData: "",
    },
    EditKeySpeciModal: {
      id: "Reference Number of Keyword Specification [System Generated]",
      specName:
        "Specification Name [Alphabet, Number, Special_Characters, Max_128_Characters]",
      specCode:
        "Specification Code [Alphabet, Number, Special_Characters, Max_64_Characters]",
      specDesc:
        "Specification Description [Alphabet, Number, Special_Characters, Max_2048_Characters]",
      specSeq: "",
      cndTagSelect: "",
      isActive: "",
    },
    SearchManageSchema: {
      schemaSelect: "",
    },
    // CreateEdit: {},
  },
  catalogue: {
    attribute: {
      AttributeMaster: {
        Search: {
          name: "Attribute Name | Length : 104",
          code: "Attribute Code | Length : 52",
          desc: "Description for Attribute | Length : 820",
          isActive: "Is Attribute Active? (Yes/No)",
        },
        CreateEdit: {
          attrName: "Name for Attribute | Mandatory | Length : 104",
          attrCode: "Code for Attribute | Mandatory | Length : 52",
          attrDesc: "Description for Attribute| Mandatory | Length : 820",
          attrTypeSelect: "Select attribute type",
          dataTypeSelect: "Select Attribute data type",
          appliedToSelect: "Applies to",
          multiValSeparator: "Enter Multi value separator | Like @,$,/...",
          isActive: "Is Attribute Active? (Yes/No)",
          selectFlagImageData: "Attribute Logo",
          maxLength: "Enter maxlength | Length : 5",
          logicalGrpSelect: "Attribute Logical Group",
          intSolr: "Solr for Attribute | Mandatory | Length : 104",
          isMultiVal: "Is Multiple Values(Yes/No)",
          regValidation: "",
          validityReg: "",
          validityRegError: "",
          dataSrcSelect: "",
          Color_Swatch: {
            appearanceTitle: "SEO Meta Title for LOV | Length : 400",
            appearanceValue: "Appearance Value",
            seq: "LOV Sequence | Mandatory | Length : 3",
            isactive: "Is LOV Active? (Yes/No) ",
            code: "Select LOV Name | Mandatory | Length : 40",
            selectFlagImageData: "Image",
          },
          Image_Swatch: {
            appearanceTitle: "SEO Meta Title for LOV | Length : 400",
            appearanceValue: "Appearance Value",
            seq: "LOV Sequence | Mandatory | Length : 3",
            isactive: "Is LOV Active? (Yes/No) ",
            code: "Select LOV Name | Mandatory | Length : 40",
            valueImgName: "Image",
          },
          LoV_OPTION: {
            lovRfnum: "312",
            valueListSeq: "312",
            appearanceTitle: "SEO Meta Title for LOV | Length : 400",
            appearanceValue: "Appearance Value",
            seq: "LOV Sequence | Mandatory | Length : 3",
            isactive: "Is LOV Active? (Yes/No) ",
            code: "Select LOV Name | Mandatory | Length : 40",
            valueImgName: "Image",
          },
        },
      },
      AttributeSet: {
        Search: {
          categorySelect: "Select Category",
          categoryChildSelect: "Select Category",
          categoryNestedChildSelect: "Select Category",
          schemaSelect: "",
        },
        CreateEdit: {},
      },
    },
    brand: {
      BrandManagement: {
        Create: {
          BrandName: "BrandName",
          brandCode: "brandCode",
          brandDescription: "brandDescription",
          brandMetaKeyword: "brandMetaKeyword",
          brandMetaDescription: "brandMetaDescription",
          isactive: "isactive",
          isnewBrand: "isnewBrand",
          selectImageData: "selectImageData",
        },
        Search: {
          brandName: "brandName",
          brandCode: "brandCode",
          isactive: "isactive",
        },
      },
    },
    catalogueManagement: {
      SearchCatalogueManagement: {
        catalogueName: "",
        catalogueTitle: "",
        isactive: "",
      },
      CreateEditCatalogueManagement: {
        internalSystemId: "",
        catalogueName: "",
        catalogueCode: "",
        catalogueTitle: "",
        catalogueDescription: "",
        metaKeywordDescription: "",
        channelDataSelect: "",
        businessThemeSelect: "",
        paymentModeSelect: "",
        restrictionTypeSelect: "",
        resValueSelect: "",
        name: "",
        isactive: "",
      },
    },
    fullfilmentServicabilty: {
      geoLocationZone: {
        CreateGeoLocationZone: {
          rfnum: "Reference number",
          name: "Location Group Name | Length : 104",
          code: "Location Group Code | Length : 52",
          isActive: "Is Location Group status Active? (Yes/No)",
          locationGroupTypeList: "locationGroupTypeList",
          locationGroupingStartegy: "locationGroupingStartegy",
          countryList: "countryList",
          stateList: "stateList",
          cityList: "cityList",
          pincodeList: "pincodeList",
        },
        SearchGeoLocationZone: {
          geoRfnum: "Reference number",
          grpCode: "Location Group Code | Length : 52",
          grpName: "Location Group Name | Length : 104",
          isActive: "Is Location Group status Active? (Yes/No)",
        },
      },
      geoLocationZoneAndStore: {
        SearchGeoLocationZoneStore: {
          storeList: "",
          isactive: "",
        },
        CreateGeoLocationZoneStore: {
          locationgrpstoreassRfnum: "",
          locationgroupCode: "",
          sellercode: "",
          storeCode: "",
          storeCode: "",
        },
      },
    },
    product: {
      ProductManagement: {
        Search: {
          categoryData: "Select Category",
          childCategoryData: "Product Code",
          childCategory2Data: "Name of Product | Mandatory | Length : 104",
          productCode: "Select Brand",
          productName: "",
          brandData: "",
          productSchema: "",
          isactive: "Is Product Active? [Yes Or No]",
        },
        ComponentScreen1: {
          schemaCode: "",
          categoryData: "Select Category",
          childCategoryData: "Select Category",
          childCategory2Data: "Select Category",
          productName: "",
          productCode: "",
          productTitle: "Product Subtitle",
          productDesc: "",
          productBrand: "",
          productType: "",
          metaTitle: "",
          productMetaDesc: "",
          metaKeyword: "",
          tags: "Tags Keyword",
          supplier: "",
          taxCode: "TaxOrHSN Code",
          minPurchaseQuantity: "",
          maxPurchaseQuantity: "",
          isActive: "",
          isSellable: "",
          isTryAtHome: "",
          isTryAtStore: "",
          isPriceOn: "",
          isTryOn: "",
          isTaxApplicable: "Tax Applicable",
          isInscription: "Is inscription",
          isEmiAvailable: "Is EMI available",
          isCustomized: "",
        },
        ComponentScreen2: {
          plpImageNameList: "",
          sellerData: "",
          articleCode: "",
          schemaCode: "",
          keywordName: "",
          vendorCode: "",
          itemName:
            "Name of Item to which product it belong | Mandatory | Length : 104",
          articleDesc: "",
          itemSku: "",
          articleCodeTex: "",
          storeCode: "",
          pilrfnum: "",
          variantMap: "",
          plpImageNameList: "",
          pdpImageNameList: "",
          isFreeShipping: "",
          isGiftWrap: "",
          isCancellable: "",
          isReturnable: "",
          isPickAtStore: "",
          ispickAtStore: "",
          lovList: "",
          kcaValue: "",
          storeCodeData: "",
          isNewArrival: "",
          lovListoptionLabel: "",
          kcaRfnum: "",
        },
        ComponentScreen3: {
          schemaCode: "",
          keywordName: "",
        },
      },
      ManufacturerDetails: {
        Search: {
          Country: "Country of manufacture",
          setManufacturerName: "Manufacturer Name",
          setManufacturerCode: "Manufacturer Code",
          qwe: "Manufacturer Address",
        },
        editProduct: {
          country: "Country of manufacture",
          name: "Manufacturer Name",
          code: "Manufacturer Code",
          address: "Manufacturer Address",
        },
        CreateProductComponent: {
          country: "Country of manufacture",
          name: "Manufacturer Name",
          code: "Manufacturer Code",
          address: "Manufacturer Address",
        },
      },
    },
  },
  global: {
    communication: {
      notifierdefination: {
        SearchNotifier: {
          NotifyType: "Notification Type",
          name: "Mailer Name | Length : 104",
          isactive: "Is Mailer status Active? (Yes/No) ",
        },
        CreateEditNotifier: {
          mailDefinitionNumber: "Mailer Definition Number",
          name: "Mailer Name| Mandatory",
          subject: "Mail Subject | Mandatory | Length : 410",
          from: "Sender Name | Mandatory | Length : 104",
          to: "Receiver Name | Length : 410",
          cc: "CC recipients | Length : 410",
          bcc: "BCC recipients | Length : 410",
          isactive: "Is Mailer status Active? (Yes/No)",
        },
      },
      templateDefinitionMaster: {
        CreateEditTemplateDefinitionMaster: {
          templateDefinitionMaster: "",
          name: "",
          templateFile: "",
          templateCode: "",
          isactive: "",
        },
        SearchTemplateDefinition: {
          NotifyType: "Notification Type",
          name: "Mailer Name | Length : 104",
          templateFile: "",
          templateCode: "",
          isactive: "Is Mailer status Active? (Yes/No)",
        },
      },
    },
    internationalization: {
      commonGroupDefinition: {
        CreateEditCommonGroupMaster: {
          otGlbCidesc: "otGlbCidesc",
          otGlbCicode: "otGlbCicode",
          otGlbCigroup: "otGlbCigroup",
          otGlbCiseq: "otGlbCiseq",
          isChecked: "isChecked",
        },
        SearchCommonGroupDefination: {
          group: "group",
          code: "code",
          isChecked: "isChecked",
        },
      },
      currenconversiondefination: {
        CreateEditCurrencyConversion: {
          convFromCode: "Select from Currency | Mandatory ",
          convToCode: "Select To Currency | Mandatory",
          convFactor: "Currency Conversion factor | Mandatory | Length : 10",
        },
        SearchCurrencyConversion: {
          convFromCode: "Select from Currency",
          convToCode: "Select To Currency",
          convFactor: "Currency Conversion factor | Length : 10",
        },
      },
      currencyDefinition: {
        CreateEditCurrencyDefn: {
          code: "",
          desc: "Description about Currency | Length : 204",
          symbol: "Currency Symbol | Mandatory | Length : 10",
          decimalPoints: "",
          prefix: "",
          suffix: "",
          isActive: "Is Active? [Yes or No]",
        },
        SearchCurrencyDefinition: {
          code: "Code for Currency | Length : 16",
          desc: "Description about Currency | Length : 204",
          symbol: "Currency Symbol | Length : 10",
          isActive: "Is Active? [Yes or No]",
        },
      },
      languagedefinitionmaster: {
        CreateEditLanguageDefinition: {
          languageCode: "Code of Language | Mandatory | Length : 6",
          languageDescription:
            "Description about Language | Mandatory | Length : 1638",
          isactive: "Is Language Status Active? (Yes/No) ",
        },
        SearchLanguageDefinition: {
          internalSystemId: "Reference Number ",
          languageCode: "Code of Language | Length : 6",
          languageDescription: "Description about Language  | Length : 1638",
          isactive: "Is Language Status Active? (Yes/No) ",
        },
      },
      organizationEnviromentVariable: {
        CreateOrganizationEnvVariable: {
          componentType: "Component type",
          variableName: "Variable Name",
          variableCode: "Variable Code",
          possibleValue: "LABEL1::VALUE1@@LABEL2::VALUE2 e.g Yes::1@@No::0",
          variableValue: "Variable Value",
          defaultValue: "Default value",
          variableDescription: "Variable Description",
          isactive: "Active Status",
          issystem: "Is System Variable ",
        },
        SearchOrganizationEnvVariable: {
          variableCode: "Variable Code",
          variableValue: "Variable Value",
          isactive: "Active Status",
        },
      },
    },
    taxation: {
      taxmaster: {
        CreateEditTaxMaster: {
          taxName: "Tax Name | Mandatory | Length : 52",
          taxCode: "Tax Code | Mandatory | Length : 52",
          taxDescription: "Tax Description | Length : 52",
          isactive: "Is Tax Status Active? (Yes/No)",
        },
        SearchTaxMaster: {
          taxName: "Tax Name | Length : 52",
          taxCode: "Tax Code | Length : 52",
          isactive: "Is Tax Status Active? (Yes/No)",
        },
      },
      taxmasterslab: {
        CreateEditTaxMasterSlab: {
          slabtaxId: "",
          slabTaxName: "Name of Slab Tax | Mandatory | Length : 52",
          slabtaxCode: "Code of Slab Tax | Mandatory | Length : 52",
          slabtaxdesc: "Descrption of Slab Tax | Length : 52",
          taxValue: "Tax Value | Mandatory | Length : 8",
          taxMasterDataSelect: "Select Tax Master | Mandatory",
          isactive: "Is Slab Tax Active? (Yes/No)",
        },
        SearchTaxMasterSlab: {
          SlabTaxName: "Name of Slab Tax | Length : 52",
          SlabtaxCode: "Code of Slab Tax | Length : 52",
          isactive: "Is Slab Tax Active? (Yes/No)",
        },
      },
    },
  },
  seller: {
    Inventory: {
      UpdateInventoryManagement: {
        sellerList: "",
        storeList: "",
        productSku: "SKU Code of Product | Length : 52",
        categoryParentList: "",
        categoryChildList: "",
        categoryNestedChildList: "",
      },
    },
    price: {
      priceManagementUpdates: {
        category: "Select Category",
        CategoryTwoData: "Select Category",
        CategoryThreeData: "Select Category",
        productSku: "SKU Code of Product | Length : 52",
      },
    },
    priceInventoryManagement: {
      priceInventoryUpdate: {
        sellerDropDown: "Select Seller | Mandatory",
        storeDropDown: "",
        categorySelectData: "Select Category",
        categoryChildSelectData: "Select Category",
        categoryNestedChildSelectData: "Select Category",
        SkuCode: "SKU of Product",
      },
    },
  },
  system: {
    organization: {
      CreateEditOrganization: {
        Details: {
          name: "Organization Name [Alphabet, Number, Special_Characters, Max_254_Characters]",
          code: "",
          address:
            "Head of Address [Alphabet, Number, Special_Characters, Max_254_Characters]",
          shippingChargeRuleData: "",
          statusData: "Shipping Charge Rule",
          regionDataSelect: "",
          pricingStrategyData: "",
          isactive: "Is Active? [Yes or No]",
        },
        LogoAndIcon: {
          selectFlagImageData: "",
          selectFaviconImageData: "",
        },
        Internationalization: {
          regionDataSelect:
            "Organization Region [Alphabet, Number, Special_Characters, Max_254_Characters]",
          countryData:
            "Country [Alphabet, Number, Special_Characters, Max_40_Characters]",
          timeZoneData: "",
          languageData:
            "Organization Language [Alphabet, Number, Special_Characters, Max_60_Characters]",
          multiLangData: "Is MultiLanguage? [Yes or No]",
          languageSwitchData:
            "Organization Language [Alphabet, Number, Special_Characters, Max_60_Characters]",
          currencyData:
            "Organization Currency [Alphabet, Number, Special_Characters, Max_254_Characters]",
          multiCurrdata: "Is MultiCurrency? [Yes or No]",
          currencySwitchData:
            "Organization Currency [Alphabet, Number, Special_Characters, Max_254_Characters]",
        },
        DomainManagement: {
          domain:
            "Organization Domain [Alphabet, Number, Special_Characters, Max_20_Characters]",
          staticDomain:
            "Organization Domain [Alphabet, Number, Special_Characters, Max_20_Characters]",
          staticimagedomain:
            "Organization Domain [Alphabet, Number, Special_Characters, Max_20_Characters]",
          secondarydomain: "Secondary Domain",
          val: "Secondary Domain",
        },
        ThemeandCatalogueSetup: {
          themeCollection: "Theme Collection",
          themeVariant: "Theme List",
          themeCatalogue: "",
        },
        PPAPMS: {
          paymentProviderDataSelect: "",
          paymentMethodDataSelect: "",
        },
        CommunicationChannelSetup: {
          mailServerIp: "Mail Server IP",
          mailServerPort: "Mail Server Port",
          mailServerProtocol: "Mail Server Protoco",
          mailServerUserName: "Mail Server User Name",
          mailServerPassword: "Mail Server Password",
          mailServerFromAddress: "Mail Server From Address",
          mailServerConnTimeOut: "Mail Server Conntion timeout",
          mailDomainName: "Mail Domain Name",
        },
        OrganizationEnvironmentVariable: {
          componentTypeData: "Component type",
          variableCode: "Variable Code",
          defaultValue: "Default value",
          possibleValue: "",
          variableValue: "Variable Value",
          variableDescription: "Variable Description",
          isSystem: "Is System Variable",
        },
        UserDetail: {
          loginUserName: "login User Name",
          userFirstName: "User First Name",
          userLastName: "User Last Name",
          userEmail: "User E-mail Id",
          userPassword: "User Password",
          userClassificationDataSelect: "",
        },
        OrganizationSellerDetail: {
          firstName: "User First Name",
          lastName: "User Last Name",
          email: "User E-mail Id",
          password: "User Password",
        },
      },
      SearchOrganization: {
        name: "",
        domain: "",
        isactive: "Is Active? [Yes or No]",
      },
    },
  },
  userAndsecurity: {
    manageUser: {
      userGrpManagement: {
        CreateUserGrpManagement: {
          grpName: "",
          grpCode: "",
          grpTypeSelect: "",
          grpDesc: "",
          isActive: "",
          userEmail: "",
        },
        SearchUserGrpManagement: {
          grpName: "",
          grpCode: "",
          isActive: "",
        },
      },
      userOnboarding: {
        CreateUserOnboarding: {
          firstName: "User First Name | Mandatory | Length : 104",
          lastName: "User Last Name | Mandatory | Length : 104",
          commMail: "User Email ID | Mandatory | Length : 104",
          userId: "User ID | Mandatory | Length : 16",
          mobileNo: "",
          userTypeChildSelect: "",
          userTypeNestedChildSelect:
            "Role List[Press CONTROL and select mulitple Option]",
          roleTypeChildSelect: "Vendor List[Select vendor here]",
          sellerSelect: "",
          userTypeSelectData: "Select User Type",
          isAdmin: "Is User login backend? (Yes/No) ",
          gender: "User Gender | Mandatory",
          isWebLogin: "Is User login frontend? (Yes/No) ",
          isNewsLetter:
            "User News Letter subscription active? (Yes/No)| Mandatory",
          isActive: "Is User active? (Yes/No)| Mandatory",
          grpSelect: "Group",
        },
        SearchUserOnboarding: {
          userId: "User Id | Length : 16",
          firstName: "User First Name | Length : 104",
          lastName: "User Last Name | Length : 104",
          userTypeSelect: "Select User Type",
          isAdmin: "Is User login backend? (Yes/No) ",
          isWebLogin: "Is User login frontend? (Yes/No) ",
          isActive: "Is User active? (Yes/No) ",
        },
      },
    },
  },
};
//{TooltipMessages.Country_Code}
