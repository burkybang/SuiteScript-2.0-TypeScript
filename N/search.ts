/**
 * SuiteScript search common module
 *
 * @module N/search
 * @suiteScriptVersion 2.x
 *
 */
class search {
    /**
     * Creates a new search. The search can be modified and run as an ad-hoc search, without saving it. Alternatively,
     * calling Search.save() will save the search to the database, so it can be reused later in the UI or using search.load().
     * @param {Object} options  the options object
     * @param {string} options.type  the record internal ID of the record type you are searching
     * @param {Filter|Filter[]|Array[]} options.filters (optional)  a single filter object or an array of filter objects or a search filter expression
     * @param {Column|Column[]|string} options.columns (optional)  a single search.Column or string or an array that contains elements of the two types
     * @param {Setting|Setting[]|string} [options.settings] (optional)  a single search.Setting or string or an array that contains elements of the two types
     * @param {string} [options.title] (optional)  name of the search (when saved)
     * @param {string} [options.id] (optional)  customer ID of the search (when saved), it's a string starting with 'customsearch'
     * @returns {Search} the created search
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when filters parameter is not a valid filter, array of filters or filter expression
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_COL when columns parameter is not a valid column, string, or array of the two
     * @since 2015.2
     */
    // function createSearch() {}
    // createSearch.prototype.promise = function() {};
    // search.prototype.create = new createSearch();
    create(options) {
    }

    /**
     * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
     * in conjunction with Search.save().
     * @governance 5 units
     * @param {Object} options  the options object
     * @param {string} options.id  the customer ID or internal ID of the search
     * @returns {Search} the loaded search
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     * @since 2015.2
     */
    // function loadSearch() {}
    // loadSearch.prototype.promise = function() {};
    // search.prototype.load = new loadSearch();
    load(options) {
    }

    /**
     * Deletes an existing saved search.
     * @governance 5 units
     * @param {Object} options  the options object
     * @param {string} options.id  the customer ID or internal ID of the search
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     * @since 2015.2
     */
    // function deleteSearch() {}
    // deleteSearch.prototype.promise = function() {};
    // search.prototype['delete'] = new deleteSearch();
    delete(options) {
    }

    /**
     * Performs a search for duplicate records based on the account's Duplicate Detection configuration.
     * Note that this API only works for records that support duplicate record detection. These records include
     * customers, leads, prospects, contacts, partners, and vendors. Use either field or id parameter depending
     * on how you want to search for duplicates.
     * @governance 10 units
     * @param {Object} options  the options object
     * @param {string} options.type  the record type you are checking duplicates for
     * @param {Object} options.fields (optional)  a set of key/value pairs used to detect duplicate (e.g. email:'foo@bar.com')
     * @param {number} options.id (optional)  internalId of existing record
     * @returns {Result[]} array of result objects corresponding to the duplicate records; results are limited to 1000 rows; returns empty array if nothing is found
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @since 2015.2
     */
    // function duplicatesSearch() {}
    // duplicatesSearch.prototype.promise = function() {};
    // search.prototype.duplicates = new duplicatesSearch();
    duplicates(option) {
    }

    /**
     * Performs a global search against a single keyword or multiple keywords.
     * @governance 10 units
     * @param {Object} options  the options object
     * @param {string} options.keywords  global search keywords string or expression
     * @returns {Result[]} array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2
     *                                   results are limited to 1000 rows; returns empty array if nothing is found
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @since 2015.2
     */
    // function globalSearch() {}
    // globalSearch.prototype.promise = function() {};
    // search.prototype.global = new globalSearch();
    global(options) {
    }

    /**
     * Performs a search for one or more body fields on a record. This function supports joined-field lookups.
     * Note that the notation for joined fields is: join_id.field_name
     * @governance 1 unit
     * @param {Object} options  the options object
     * @param {string} options.type  the record internal ID of the record type you are searching
     * @param {string} options.id  the internalId of the record
     * @param {string|string[]} options.columns  array of column/field names to look up, or a single column/field name
     * @returns {Object} search results in the form of key/value pairs; example:
     *     {
     *         foo: 'bar',
     *         name.join: 'othervalue',
     *         select: [{
     *             value: '123',
     *             text: 'Some UI text'
     *         }],
     *         multiselect1: [],
     *         multiselect2: [{
     *             value: '3',
     *             text: 'Green'
     *         },{
     *             value: '5',
     *             text: 'Pinkish yellow'
     *         }]
     *     }
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @since 2015.2
     */
    // function lookupFieldsSearch() {}
    // lookupFieldsSearch.prototype.promise = function() {};
    // search.prototype.lookupFields = new lookupFieldsSearch();
    lookupFields(options) {
    }

    /**
     * Creates a search.Column object.
     * @param {Object} options  the options object
     * @param {string} options.name  the search return column name
     * @param {string} [options.join] (optional)  the join ID for this search return column
     * @param {Summary} [options.summary] (optional)  the summary type for this column
     * @param {string} [options.formula] (optional)  formula used for this column
     * @param {string} [options.function] (optional)  function used for this column
     * @param {string} [options.label] (optional)  label used for this column
     * @param {string} [options.sort] (optional)  sort direction for this column; use values from the Sort enum
     * @returns {Column} the created column object
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
     * @throws {SuiteScriptError} INVALID_SRCH_FUNCTN if an unknown function is provided
     * @since 2015.2
     */
    createColumn(options) {
    }

    /**
     * Creates a search.Filter object.
     * @param {Object} options  the options object
     * @param {string} options.name  internal ID of the search field
     * @param {string} [options.join] (optional)  if executing a joined search, this is the join ID used for the search field specified in the name parameter
     * @param {string} options.operator  search operator
     * @param {string|Date|number|string[]|Date[]} [options.values] (optional)  values to be used as filter parameters
     * @param {string} [options.formula] (optional)  formula used for this filter
     * @param {Summary} [options.summary] (optional)  summary type used for this filter
     * @returns {Filter} the created filter object
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
     * @throws {SuiteScriptError} INVALID_SRCH_SUMMARY_TYP if an unknown summary type is provided
     * @since 2015.2
     */
    createFilter(options) {
    }

    /**
     * Creates a search.Setting object.
     * @param {Object} options  the options object
     * @param {string} options.name  name of the result setting parameter
     * @param {string} options.value  value of the result settting parameter
     * @returns {Setting} the created setting object
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING if an unknown setting parameter name is provided
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING_VALUE if an invalid setting parameter value is provided
     * @since 2015.2
     */
    createSetting(options) {
    }
}

namespace search {
    export enum Operator {
        AFTER = 'after',
        ALLOF = 'allof',
        ANY = 'any',
        ANYOF = 'anyof',
        BEFORE = 'before',
        BETWEEN = 'between',
        CONTAINS = 'contains',
        DOESNOTCONTAIN = 'doesnotcontain',
        DOESNOTSTARTWITH = 'doesnotstartwith',
        EQUALTO = 'equalto',
        GREATERTHAN = 'greaterthan',
        GREATERTHANOREQUALTO = 'greaterthanorequalto',
        HASKEYWORDS = 'haskeywords',
        IS = 'is',
        ISEMPTY = 'isempty',
        ISNOT = 'isnot',
        ISNOTEMPTY = 'isnotempty',
        LESSTHAN = 'lessthan',
        LESSTHANOREQUALTO = 'lessthanorequalto',
        NONEOF = 'noneof',
        NOTAFTER = 'notafter',
        NOTALLOF = 'notallof',
        NOTBEFORE = 'notbefore',
        NOTBETWEEN = 'notbetween',
        NOTEQUALTO = 'notequalto',
        NOTGREATERTHAN = 'notgreaterthan',
        NOTGREATERTHANOREQUALTO = 'notgreaterthanorequalto',
        NOTLESSTHAN = 'notlessthan',
        NOTLESSTHANOREQUALTO = 'notlessthanorequalto',
        NOTON = 'noton',
        NOTONORAFTER = 'notonorafter',
        NOTONORBEFORE = 'notonorbefore',
        NOTWITHIN = 'notwithin',
        ON = 'on',
        ONORAFTER = 'onorafter',
        ONORBEFORE = 'onorbefore',
        STARTSWITH = 'startswith',
        WITHIN = 'within',
    }

    export enum Summary {
        GROUP = 'GROUP',
        COUNT = 'COUNT',
        SUM = 'SUM',
        AVG = 'AVG',
        MIN = 'MIN',
        MAX = 'MAX',
    };

    export enum Sort {
        ASC = 'ASC',
        DESC = 'DESC',
        NONE = 'NONE',
    }

    export enum Type {
        ACCOUNT = 'account',
        ACCOUNTING_BOOK = 'accountingbook',
        ACCOUNTING_CONTEXT = 'accountingcontext',
        ACCOUNTING_PERIOD = 'accountingperiod',
        ADV_INTER_COMPANY_JOURNAL_ENTRY = 'advintercompanyjournalentry',
        AMORTIZATION_SCHEDULE = 'amortizationschedule',
        AMORTIZATION_TEMPLATE = 'amortizationtemplate',
        ASSEMBLY_BUILD = 'assemblybuild',
        ASSEMBLY_ITEM = 'assemblyitem',
        ASSEMBLY_UNBUILD = 'assemblyunbuild',
        BILLING_ACCOUNT = 'billingaccount',
        BILLING_CLASS = 'billingclass',
        BILLING_RATE_CARD = 'billingratecard',
        BILLING_REVENUE_EVENT = 'billingrevenueevent',
        BILLING_SCHEDULE = 'billingschedule',
        BIN = 'bin',
        BIN_ITEM_BALANCE = 'BinItemBalance',
        BIN_TRANSFER = 'bintransfer',
        BIN_WORKSHEET = 'binworksheet',
        BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder',
        BOM = 'bom',
        BOM_REVISION = 'bomrevision',
        BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript',
        CALENDAR_EVENT = 'calendarevent',
        CAMPAIGN = 'campaign',
        CASH_REFUND = 'cashrefund',
        CASH_SALE = 'cashsale',
        CHARGE = 'charge',
        CHARGE_RULE = 'chargerule',
        CHECK = 'check',
        CLASSIFICATION = 'classification',
        CLIENT_SCRIPT = 'clientscript',
        CMS_CONTENT = 'cmscontent',
        CMS_CONTENT_TYPE = 'cmscontenttype',
        CMS_PAGE = 'cmspage',
        COMMERCE_CATEGORY = 'commercecategory',
        COMPETITOR = 'competitor',
        COM_SEARCH_ONE_WAY_SYN = 'ComSearchOneWaySyn',
        COM_SEARCH_GROUP_SYN = 'ComSearchGroupSyn',
        CONSOLIDATED_EXCHANGE_RATE = 'consolidatedexchangerate',
        CONTACT = 'contact',
        CONTACT_CATEGORY = 'contactcategory',
        CONTACT_ROLE = 'contactrole',
        COST_CATEGORY = 'costcategory',
        COUPON_CODE = 'couponcode',
        CREDIT_CARD_CHARGE = 'creditcardcharge',
        CREDIT_CARD_REFUND = 'creditcardrefund',
        CREDIT_MEMO = 'creditmemo',
        CROSSCHARGEABLE = 'Crosschargeable',
        CURRENCY = 'currency',
        CUSTOMER = 'customer',
        CUSTOMER_CATEGORY = 'customercategory',
        CUSTOMER_DEPOSIT = 'customerdeposit',
        CUSTOMER_MESSAGE = 'customermessage',
        CUSTOMER_PAYMENT = 'customerpayment',
        CUSTOMER_PAYMENT_AUTHORIZATION = 'customerpaymentauthorization',
        CUSTOMER_REFUND = 'customerrefund',
        CUSTOMER_STATUS = 'customerstatus',
        CUSTOMER_SUBSIDIARY_RELATIONSHIP = 'customersubsidiaryrelationship',
        CUSTOM_RECORD = 'customrecord',
        CUSTOM_TRANSACTION = 'customtransaction',
        DEPARTMENT = 'department',
        DEPOSIT = 'deposit',
        DEPOSIT_APPLICATION = 'depositapplication',
        DESCRIPTION_ITEM = 'descriptionitem',
        DISCOUNT_ITEM = 'discountitem',
        DOWNLOAD_ITEM = 'downloaditem',
        EMPLOYEE = 'employee',
        ENTITY_ACCOUNT_MAPPING = 'entityaccountmapping',
        ESTIMATE = 'estimate',
        EXPENSE_AMORT_PLAN_AND_SCHEDULE = 'ExpenseAmortPlanAndSchedule',
        EXPENSE_CATEGORY = 'expensecategory',
        EXPENSE_REPORT = 'expensereport',
        FAIR_VALUE_PRICE = 'fairvalueprice',
        FIXED_AMOUNT_PROJECT_REVENUE_RULE = 'fixedamountprojectrevenuerule',
        FOLDER = 'folder',
        FULFILLMENT_REQUEST = 'fulfillmentrequest',
        GENERIC_RESOURCE = 'genericresource',
        GIFT_CERTIFICATE = 'giftcertificate',
        GIFT_CERTIFICATE_ITEM = 'giftcertificateitem',
        GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping',
        GLOBAL_INVENTORY_RELATIONSHIP = 'globalinventoryrelationship',
        INBOUND_SHIPMENT = 'inboundshipment',
        INTER_COMPANY_JOURNAL_ENTRY = 'intercompanyjournalentry',
        INTER_COMPANY_TRANSFER_ORDER = 'intercompanytransferorder',
        INVENTORY_ADJUSTMENT = 'inventoryadjustment',
        INVENTORY_COST_REVALUATION = 'inventorycostrevaluation',
        INVENTORY_COUNT = 'inventorycount',
        INVENTORY_DETAIL = 'inventorydetail',
        INVENTORY_ITEM = 'inventoryitem',
        INVENTORY_NUMBER = 'inventorynumber',
        INVENTORY_NUMBER_ITEM = 'InventoryNumberItem',
        INVENTORY_STATUS = 'inventorystatus',
        INVENTORY_STATUS_LOCATION = 'InventoryStatusLocation',
        INVENTORY_STATUS_CHANGE = 'inventorystatuschange',
        INVENTORY_TRANSFER = 'inventorytransfer',
        INVOICE = 'invoice',
        INVT_NUMBER_ITEM_BALANCE = 'InvtNumberItemBalance',
        ISSUE = 'issue',
        ITEM_ACCOUNT_MAPPING = 'itemaccountmapping',
        ITEM_BIN_NUMBER = 'ItemBinNumber',
        ITEM_DEMAND_PLAN = 'itemdemandplan',
        ITEM_FULFILLMENT = 'itemfulfillment',
        ITEM_GROUP = 'itemgroup',
        ITEM_LOCATION_CONFIGURATION = 'itemlocationconfiguration',
        ITEM_RECEIPT = 'itemreceipt',
        ITEM_REVISION = 'itemrevision',
        ITEM_SUPPLY_PLAN = 'itemsupplyplan',
        JOB = 'job',
        JOB_STATUS = 'jobstatus',
        JOB_TYPE = 'jobtype',
        JOURNAL_ENTRY = 'journalentry',
        KIT_ITEM = 'kititem',
        LABOR_BASED_PROJECT_REVENUE_RULE = 'laborbasedprojectrevenuerule',
        LEAD = 'lead',
        LOCATION = 'location',
        LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumberedassemblyitem',
        LOT_NUMBERED_INVENTORY_ITEM = 'lotnumberedinventoryitem',
        MANUFACTURING_COST_TEMPLATE = 'manufacturingcosttemplate',
        MANUFACTURING_OPERATION_TASK = 'manufacturingoperationtask',
        MANUFACTURING_ROUTING = 'manufacturingrouting',
        MAP_REDUCE_SCRIPT = 'mapreducescript',
        MARKUP_ITEM = 'markupitem',
        MASSUPDATE_SCRIPT = 'massupdatescript',
        MERCHANDISE_HIERARCHY_LEVEL = 'merchandisehierarchylevel',
        MERCHANDISE_HIERARCHY_NODE = 'merchandisehierarchynode',
        MERCHANDISE_HIERARCHY_VERSION = 'merchandisehierarchyversion',
        MESSAGE = 'message',
        MFG_PLANNED_TIME = 'mfgplannedtime',
        NEXUS = 'nexus',
        NON_INVENTORY_ITEM = 'noninventoryitem',
        NOTE = 'note',
        NOTE_TYPE = 'notetype',
        OPPORTUNITY = 'opportunity',
        OTHER_CHARGE_ITEM = 'otherchargeitem',
        OTHER_NAME = 'othername',
        OTHER_NAME_CATEGORY = 'othernamecategory',
        PARTNER = 'partner',
        PARTNER_CATEGORY = 'partnercategory',
        PAYCHECK = 'paycheck',
        PAYCHECK_JOURNAL = 'paycheckjournal',
        PAYMENT_ITEM = 'paymentitem',
        PAYMENT_METHOD = 'paymentmethod',
        PAYROLL_ITEM = 'payrollitem',
        PERIOD_END_JOURNAL = 'periodendjournal',
        PCT_COMPLETE_PROJECT_REVENUE_RULE = 'pctcompleteprojectrevenuerule',
        PHONE_CALL = 'phonecall',
        PORTLET = 'portlet',
        PRICE_BOOK = 'pricebook',
        PRICE_LEVEL = 'pricelevel',
        PRICE_PLAN = 'priceplan',
        PRICING_GROUP = 'pricinggroup',
        PROJECT_EXPENSE_TYPE = 'projectexpensetype',
        PROJECT_TASK = 'projecttask',
        PROJECT_TEMPLATE = 'projecttemplate',
        PROMOTION_CODE = 'promotioncode',
        PROSPECT = 'prospect',
        PURCHASE_CONTRACT = 'purchasecontract',
        PURCHASE_ORDER = 'purchaseorder',
        PURCHASE_REQUISITION = 'purchaserequisition',
        RESOURCE_ALLOCATION = 'resourceallocation',
        RES_ALLOCATION_TIME_OFF_CONFLICT = 'ResAllocationTimeOffConflict',
        RESTLET = 'restlet',
        RETURN_AUTHORIZATION = 'returnauthorization',
        REVENUE_ARRANGEMENT = 'revenuearrangement',
        REVENUE_COMMITMENT = 'revenuecommitment',
        REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal',
        REVENUE_PLAN = 'revenueplan',
        REV_REC_PLAN_AND_SCHEDULE = 'RevRecPlanAndSchedule',
        REV_REC_SCHEDULE = 'revrecschedule',
        REV_REC_TEMPLATE = 'revrectemplate',
        SALES_ORDER = 'salesorder',
        SALES_ROLE = 'salesrole',
        SALES_TAX_ITEM = 'salestaxitem',
        SCHEDULED_SCRIPT = 'scheduledscript',
        SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance',
        SCRIPT_DEPLOYMENT = 'scriptdeployment',
        SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem',
        SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem',
        SERVICE_ITEM = 'serviceitem',
        SHIP_ITEM = 'shipitem',
        SOLUTION = 'solution',
        STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry',
        STORE_PICKUP_FULFILLMENT = 'storepickupfulfillment',
        SUBSCRIPTION = 'subscription',
        SUBSCRIPTION_CHANGE_ORDER = 'subscriptionchangeorder',
        SUBSCRIPTION_LINE = 'subscriptionline',
        SUBSCRIPTION_PLAN = 'subscriptionplan',
        SUBSIDIARY = 'subsidiary',
        SUBTOTAL_ITEM = 'subtotalitem',
        SUITELET = 'suitelet',
        SUPPLY_CHAIN_SNAPSHOT = 'supplychainsnapshot',
        SUPPLY_CHAIN_SNAPSHOT_DETAILS = 'SupplyChainSnapshotDetails',
        SUPPORT_CASE = 'supportcase',
        TASK = 'task',
        TAX_GROUP = 'taxgroup',
        TAX_PERIOD = 'taxperiod',
        TAX_TYPE = 'taxtype',
        TERM = 'term',
        TIME_APPROVAL = 'TimeApproval',
        TIME_BILL = 'timebill',
        TIME_ENTRY = 'timeentry',
        TIME_OFF_CHANGE = 'timeoffchange',
        TIME_OFF_PLAN = 'timeoffplan',
        TIME_OFF_REQUEST = 'timeoffrequest',
        TIME_OFF_RULE = 'timeoffrule',
        TIME_OFF_TYPE = 'timeofftype',
        TIME_SHEET = 'timesheet',
        TIMESHEET_APPROVAL = 'TimesheetApproval',
        TOPIC = 'topic',
        TRANSFER_ORDER = 'transferorder',
        UNITS_TYPE = 'unitstype',
        USAGE = 'usage',
        USEREVENT_SCRIPT = 'usereventscript',
        VENDOR = 'vendor',
        VENDOR_BILL = 'vendorbill',
        VENDOR_CATEGORY = 'vendorcategory',
        VENDOR_CREDIT = 'vendorcredit',
        VENDOR_PAYMENT = 'vendorpayment',
        VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization',
        VENDOR_SUBSIDIARY_RELATIONSHIP = 'vendorsubsidiaryrelationship',
        WEBSITE = 'website',
        WORKFLOW_ACTION_SCRIPT = 'workflowactionscript',
        WORK_ORDER = 'workorder',
        WORK_ORDER_CLOSE = 'workorderclose',
        WORK_ORDER_COMPLETION = 'workordercompletion',
        WORK_ORDER_ISSUE = 'workorderissue',
        WORKPLACE = 'workplace',
        FIN_RPT_AGGREGATE_F_R = 'FinRptAggregateFR',
        AGGR_FIN_DAT = 'AggrFinDat',
        BILLING_ACCOUNT_BILL_CYCLE = 'BillingAccountBillCycle',
        BILLING_ACCOUNT_BILL_REQUEST = 'BillingAccountBillRequest',
        DELETED_RECORD = 'DeletedRecord',
        END_TO_END_TIME = 'EndToEndTime',
        GL_LINES_AUDIT_LOG = 'GlLinesAuditLog',
        INSTALLMENT = 'Installment',
        INVENTORY_BALANCE = 'InventoryBalance',
        INVENTORY_NUMBER_BIN = 'InventoryNumberBin',
        PERMISSION = 'Permission',
        PRICING = 'Pricing',
        RECENT_RECORD = 'RecentRecord',
        ROLE = 'Role',
        SAVED_SEARCH = 'SavedSearch',
        SHOPPING_CART = 'ShoppingCart',
        SUBSCRIPTION_RENEWAL_HISTORY = 'SubscriptionRenewalHistory',
        SUITE_SCRIPT_DETAIL = 'SuiteScriptDetail',
        SYSTEM_NOTE = 'SystemNote',
        TAX_DETAIL = 'TaxDetail',
        UBER = 'Uber',
        ENTITY = 'entity',
        ACTIVITY = 'activity',
        ITEM = 'item',
        TRANSACTION = 'transaction',
        PAYMENT_EVENT = 'PaymentEvent',
        GATEWAY_NOTIFICATION = 'GatewayNotification',
    }

    /**
     * Return a new instance of search.Search object.
     *
     * @classDescription Encapsulation of a search.
     * @constructor
     * @param {string} typeOrJavaSearch (optional)  the record type you are searching
     * @param {number} id  the internal ID of the search
     * @param {Filter | array of search.Filter} filters (optional)  a single filter object or an array of filters used to
     *     filter the search
     * @param {Column|string|Column[]|string[]} columns (optional)  columns to be returned from the search
     * @returns {Search}
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER when provided filters contain a different type than search.Filter
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN when provided columns contain a different type than search.Column
     *     or string
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING when provided filters contain a different type than search.Setting
     * @since 2015.2
     */
    class Search {

        /**
         * Search type.
         * @name Search#searchType
         * @type string
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        searchType = undefined;

        /**
         * Internal ID of the search.
         * @name Search#searchId
         * @type number
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        searchId = undefined;

        /**
         * Search filters.
         * @name Search#filters
         * @type Filter[] (setter accepts also a single search.Filter object)
         * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER when setting value of different type than search.Filter
         */
        filters = undefined;

        /**
         * Allows to set or get the search filters in the form of a search filter expression.
         * @name Search#filterExpression
         * @type Array[]
         * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when setting invalid search filter expression
         */
        filterExpression = undefined;

        /**
         * Columns to be returned from the search.
         * @name Search#columns
         * @type Column[]|string[] (setter accepts also a single search.Column or string)
         * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN when setting value of different type than search.Column or
         *     string
         */
        columns = undefined;

        /**
         * Columns to be returned from the search.
         * @name Search#settings
         * @type Setting[]|string[] (setter accepts also a single search.Setting or string)
         * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING if an unknown setting parameter name is provided
         * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING_VALUE if an invalid setting parameter value is provided
         */
        settings = undefined;

        /**
         * Name of the saved search. Needs to be set before saving the search.
         * @name Search#title
         * @type string
         */
        title = undefined;

        /**
         * Customer ID of the saved search (string starting with 'customsearch'). If not set, then it is automatically
         * generated upon save.
         * @name Search#id
         * @type string
         */
        id = undefined;

        /**
         * Specifies whether the search is public or private.
         * @name Search#isPublic
         * @type boolean
         */
        isPublic = undefined;

        /**
         * Saves the current search as a saved search. Before calling save() the title property must be set. The optional
         * id property may also be set, if it's not then it's automatically generated. The title and id properties may be
         * set:
         * 1) upon creation (parameters title and id of the options object)
         * 2) by explicitly setting the properties (e.g. Search.title = 'foo'; Search.id = 'customsearch_bar'; )
         * 3) by loading a previously saved search (the properties are inherited)
         * @governance 5 units
         * @returns {number} the internal search ID of the saved search
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if title property is not set
         * @throws {SuiteScriptError} NAME_ALREADY_IN_USE if the search name (title property) is not unique
         * @throws {SuiteScriptError} SSS_DUPLICATE_SEARCH_SCRIPT_ID if the search ID (id property) is not unique
         * @since 2015.2
         */
        // function saveThis() {}
        // saveThis.prototype.promise = function() {};
        // save = new saveThis();
        save() {
        };

        /**
         * Runs the current search.
         * @returns {ResultSet} the result set object
         * @since 2015.2
         */
        run() {
        };

        /**
         * Runs the current search with a paged interface.
         * @param {Object} options
         * @param {number} options.pageSize
         * @returns {SearchPagedData} PagedData object that allows user to page through the search result
         * @since 2016.1
         */
        // function runPagedThis() {}
        // runPagedThis.prototype.promise = function() {};
        // runPaged = new runPagedThis();
        runPaged(options) {
        };

        /**
         * Returns the object type name (search.Search)
         * @returns {string}
         */
        toString() {
        };

        /**
         * JSON.stringify() implementation.
         * @returns {Object}
         */
        toJSON() {
        };
    }

    /**
     * Return a new instance of search.Filter object.
     *
     * @classDescription Encapsulation of a search filter.
     * @protected
     * @constructor
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
     *
     * @since 2015.2
     */
    class Filter {

        /**
         * Field name for this search filter.
         * @name Filter#name
         * @type string
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        name = undefined;

        /**
         * Join ID for this search filter.
         * @name Filter#join
         * @type string
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        join = undefined;

        /**
         * Filter operator.
         * @name Filter#operator
         * @type string
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        operator = undefined;

        /**
         * Summary type for this search filter.
         * @name Filter#summary
         * @type string
         * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_SUM when setting invalid summary type
         */
        summary = undefined;

        /**
         * Formula used for this search filter.
         * @name Filter#formula
         * @type string
         */
        formula = undefined;

        /**
         * Returns the object type name (search.Filter)
         * @returns {string}
         */
        toString() {
        };

        /**
         * JSON.stringify() implementation.
         * @returns {Object}
         */
        toJSON() {
        };
    }

    /**
     * Return a new instance of search.Column object.
     *
     * @classDescription Encapsulation of a search column.
     * @protected
     * @constructor
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
     *
     * @since 2015.2
     */
    class Column {

        /**
         * The name of the search column.
         * @name Column#name
         * @type string
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        name = undefined;

        /**
         * The join ID for this search column.
         * @name Column#join
         * @type string
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        join = undefined;

        /**
         * The summary type for this search column.
         * @name Column#summary
         * @type string
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        summary = undefined;

        /**
         * The formula used for this search column.
         * @name Column#formula
         * @type string
         */
        formula = undefined;

        /**
         * The label used for this search column.
         * @name Column#label
         * @type string
         */
        label = undefined;

        /**
         * The function used in this search column.
         * @name Column#function
         * @type string
         * @throws {SuiteScriptError} INVALID_SRCH_FUNCTN when setting an unknown function is attempted
         */
        function = undefined;

        /**
         * The sort direction for this search column. Use values from the Sort enum.
         * @name Column#sort
         * @type string
         */
        sort = undefined;

        /**
         * Returns the search column for which the minimal or maximal value should be found when returning the search.Column
         * value. For example, can be set to find the most recent or earliest date, or the largest or smallest amount for a
         * record, and then the search.Column value for that record is returned. Can only be used when summary type is MIN
         * or MAX.
         * @param {Object} options  the options object
         * @param {string} options.name  name of the search column for which the minimal or maximal value should be found
         * @param {string} options.join  join id for this search column
         * @returns {Column} this search column
         * @since 2015.2
         */
        setWhenOrderedBy(options) {
        };

        /**
         * Returns the object type name (search.Column)
         * @returns {string}
         */
        toString() {
        };

        /**
         * JSON.stringify() implementation.
         * @returns {Object}
         */
        toJSON() {
        };
    }

    /**
     * Return a new instance of search.Setting object.
     *
     * @classDescription Encapsulation of a search setting.
     * @protected
     * @constructor
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING if an unknown setting parameter name is provided
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING_VALUE if an invalid setting parameter value is provided
     *
     * @since 2018.2
     */
    class Setting {

        /**
         * Name for this search setting.
         * @name Option#name
         * @type string
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        name = undefined;
        /**
         * value for this search setting.
         * @name Option#value
         * @type string
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        value = undefined;

        /**
         * Returns the object type name (search.Setting)
         * @returns {string}
         */
        toString() {
        };

        /**
         * JSON.stringify() implementation.
         * @returns {Object}
         */
        toJSON() {
        };
    }

    /**
     * Return a new instance of search.ResultSet object.
     *
     * @classDescription Encapsulation of a search result set.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */
    class ResultSet {

        /**
         * List of columns contained in this result set.
         * @name ResultSet#columns
         * @type Column[]
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        columns = undefined;

        /**
         * Retrieve a slice of the search result set. Only 1000 results can be returned at a time. If there are fewer results
         * available than requested, then the array will be truncated.
         * @governance 10 units
         * @param {Object} options  the options object
         * @param {number} options.start  the index number of the first result to return, inclusive
         * @param {number} options.end  the index number of the last result to return, exclusive
         * @returns {Result[]} the requested slice of the search result set
         * @since 2015.2
         */
        getRange(options) {
        };

        /**
         * Calls the developer-defined callback function for every result in this set. The result set processed by each()
         * may have maximum 4000 rows. The callback function has the following signature: boolean callback(result.Result
         * result); If the return value of the callback is false, the iteration over results is stopped, otherwise it
         * continues. Note that the work done in the context of the callback function counts towards the governance of the
         * script that called it.
         * @governance 10 units
         * @param {Function} callback  the function called for each result in the result set
         * @returns {undefined}
         * @since 2015.2
         */
        each(options) {
        };

        /**
         * Returns the object type name (search.ResultSet)
         * @returns {string}
         */
        toString() {
        };

        /**
         * JSON.stringify() implementation.
         * @returns {Object}
         */
        toJSON() {
        };
    }

    /**
     * Return a new instance of search.Result object.
     *
     * @classDescription Encapsulation of a search result.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */
    class Result {

        /**
         * Record type of the result.
         * @name Result#recordType
         * @type string
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        recordType = undefined;
        /**
         * Record internal ID of the result.
         * @name Result#id
         * @type number
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        id = undefined;
        /**
         * List of columns contained in this result.
         * @name Result#columns
         * @type Column[]
         * @readonly
         * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
         */
        columns = undefined;

        /**
         * Returns the value of a specified search return column. The column may be specified in two ways:
         * 1) by providing a search.Column object
         * 2) by providing name, join and summary parameters
         * @param {search.Column} column  search return column object whose value you want to return
         * - or -
         * @param {Object} options  the options object
         * @param {string} options.name  the name of the search column whose value you want to return
         * @param {string} options.join (optional)  the join ID for this search column
         * @param {string} options.summary (optional)  the summary type used for this search column
         * @returns {string} string value of the search result column
         * @since 2015.2
         */
        getValue(options) {
        };

        /**
         * Returns the UI display name (i.e. the text value) of a specified search return column.
         * Note that this method is supported on select, image and document fields only.
         * The column may be specified in two ways:
         * 1) by providing a search.Column object
         * 2) by providing name, join and summary parameters
         * @param {Column} column  search return column object whose value you want to return
         * - or -
         * @param {Object} options  the options object
         * @param {string} options.name  the name of the search column whose value you want to return
         * @param {string} options.join (optional)  the join ID for this search column
         * @param {Summary} options.summary (optional)  the summary type used for this search column
         * @returns {string} UI display name (text value) of the search result column
         * @since 2015.2
         */
        getText(options) {
        };

        /**
         * Returns the object type name (search.Result)
         * @returns {string}
         */
        toString() {
        };

        /**
         * JSON.stringify() implementation.
         * @returns {Object}
         */
        toJSON() {
        };
    }

    /**
     * @protected
     * @constructor
     */
    class PagedData {

        /**
         * rows per page - defined in search definition [5 - 1000]
         * @type {number}
         */
        pageSize = undefined;

        /**
         * total row count
         * @type {number}
         */
        count = undefined;

        /**
         * @type {SearchPageRange}
         */
        pageRanges = undefined;
    }

    /**
     * @protected
     * @constructor
     */
    class PagedRange {

        /**
         * @returns {number}
         */
        getIndex() {
        };

        /**
         * @returns {string}
         */
        getCompoundKey() {
        };

        /**
         * @returns {string}
         */
        getCompoundLabel() {
        };
    }
}

/**
 * @type {search}
 */
N.prototype.search = search;