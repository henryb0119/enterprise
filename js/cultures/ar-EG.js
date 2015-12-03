(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/ar-EG', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('ar-EG', {
    //layout/language
    language: 'ar',
    englishName: 'Arabic (Egypt)',
    nativeName: 'العربية (مصر)',
    //layout/orientation/@characters
    direction: 'right-to-left',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '/', //Infered
                   'timeSeparator': ':',
                   'short': 'M/d/yyyy', //use four digit year
                   'medium': 'dd/MM/yyyy',
                   'long': 'd MMMM، yyyy',
                   'full': 'EEEE، d MMMM، yyyy',
                   'month': 'dd MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'h:mm:ss a',
                   'datetime': 'M/d/yyyy h:mm a'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'لسبت'],
         abbreviated: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        abbreviated: ['ي', 'ف', 'م', 'أ', 'و', 'ن', 'ل', 'غ', 'س', 'ك', 'ب', 'د']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'h:mm a',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['ص', 'م']
    }, { name: 'islamic-umalqura',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '/', //Infered
                   'short': 'd/M/yyyy', //use four digit year
                   'medium': 'd MMM، yyyy',
                   'long': 'd MMM، yyyy G',
                   'full': 'EEEE، d MMMM، y G',
                   'datetime': 'd/M/yyyy h:mm a'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
         abbreviated: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'],
        abbreviated: ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '١٠', '١١', '١٢']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'h:mm a',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['ص', 'م']
    }

    ],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: '£', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '¤ #,##0.00',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '٪',
      percentFormat: '#,##0 ٪',
      minusSign: '-',
      decimal: '٫',
      group: '٬'
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'حقوق النشر &copy; {0} Infor. جميع الحقوق محفوظة. تعتبر علامتيّ The word and design المنصوص عليهما بهذه الوثيقة علامات تجارية و/أو علامات تجارية مسجلة لشركة Infor و/أو للشركات التابعة لها والفرعية. جميع الحقوق محفوظة. تعتبر كافة العلامات التجارية المدرجة هنا هي ملكية خاصة بأصحابها.'},
      'Actions': {id: 'Actions', value: 'إجراءات', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'إضافة', comment: 'Add'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'إنشاء تصفية متقدمة', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'تنبيه', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'كافة النتائج لـ', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'محاذاة إلى الأسفل', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'محاذاة أفقية إلى الوسط', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'كهرماني', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'أرجواني', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'تطبيق', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'مرفق', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'سماوي', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: 'بين', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'اقتباس كتلة', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'غامق', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'عليه إشارة مرجعية', comment: 'Bookmark filled'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'وضع إشارة على هذا', comment: 'Bookmark outlined'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'التنقل المتقدم', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'قائمة نقطية', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'التقويم', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'كاميرا', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'إلغاء', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'تشغيل Caps Lock', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'سلة', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'توسيط', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'أحرف متبقية ', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'الحد الأقصى لعدد الأحرف ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. استخدم مفاتيح الأسهم لتغيير الاختيار.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'خانة الاختيار', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'محدّد', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'مسح', comment: 'Tooltip for a Clear Action'},
      'Clock': {id: 'Clock', value: 'ساعة', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'إغلاق', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'نسخ', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'طي', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'طي درج التطبيق', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'أعمدة', comment: 'Columns tooltip'},
      'Compose': {id: 'Compose', value: 'إنشاء', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'مكتمل', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'تأكيد', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'يحتوي على', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: 'قص', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'التاريخ', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'حذف', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'توزيع أفقي', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'مستند', comment: 'Document tooltip'},
      'Drilldown': {id: 'Drilldown', value: 'التصفح لأسفل', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'التصفح لأعلى', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'قائمة منسدلة', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'لا يحتوي على', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'لا يساوي', comment: 'Does Not Equal in icons for filtering'},
      'Down': {id: 'Down', value: 'أسفل', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'تنزيل', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'مكرر', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'إما تحديد أو عدم تحديد', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EnterComments': {id: 'EnterComments', value: 'أدخل التعليقات هنا...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'خطأ', comment: 'Title, Spoken Text describing fact an error has occured'},
      'EmailValidation': {id: 'EmailValidation', value: 'عنوان البريد الإلكتروني غير صحيح', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'زمردي', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'توسيع', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'توسيع درج التطبيق', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'توسيع / طي', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'تصدير كجدول بيانات', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'تحرير', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'يساوي', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'إنهاء عرض كامل الصفحة', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'تصدير', comment: 'Export tooltip'},
      'FileUpload': {id: 'FileUpload', value: 'تحميل الملف، اضغط على Enter للاستعراض بحثاً عن ملف', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'تصفية', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'الصفحة الأولى', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'مجلد', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'عرض كامل الصفحة', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'الانتقال للأمام', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'الانتقال للخلف', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'الانتقال للأسفل', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'الانتقال للأعلى', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'غرافيتي', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'أكبر من أو يساوي', comment: 'Greater Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'أكبر من', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'شبكة', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'ساعات', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'العنوان ثلاثة', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'العنوان أربعة', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'الأعلى', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'الصفحة الرئيسية', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'عرض HTML', comment: 'Html View tooltip'},
      'Import': {id: 'Import', value: 'استيراد', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'معلومات', comment: 'Info tooltip'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'إدراج ارتساء', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'إدراج صورة', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: 'مائل', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'تاريخ غير صحيح', comment: 'validation message for wrong date format (short)'},
      'Inventory': {id: 'Inventory', value: 'مخزون', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'فارغاً', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'غير فارغ', comment: 'Is Not Empty in icons for filtering'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'ضبط للمركز', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'ضبط لليسار', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'ضبط لليمين', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'كلمة أساسية', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'يشغّل', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'آخر صفحة', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'يسار', comment: 'Left tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'أقل من أو يساوي', comment: 'Less Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'أقل من', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'رابط', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'تحميل', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'تحميل', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'مؤمّن', comment: 'Locked tooltip'},
      'Lookup': {id: 'Lookup', value: 'البحث', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'الأقل', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'بريد', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'رمز الخريطة', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'تكبير', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'وسيط', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'متوسط', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'قائمة', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'المشاركة مع Ming.le', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'دقائق', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'تصغير', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'ناقص', comment: 'Minus tooltip'},
      'More': {id: 'More', value: 'المزيد...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'إجراءات إضافية', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: '، معدّل', comment: 'for modified form fields'},
      'MultiselectWith': {id: 'MultiselectWith', value: '. Multiselect with ', comment: 'the minutes portion of a time'},
      'NewDocument': {id: 'NewDocument', value: 'مستند جديد', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: 'التالي', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'الصفحة التالية', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'الشهر التالي', comment: 'the label for the button that moves calendar to next/prev'},
      'NoResults': {id: 'NoResults', value: 'لا توجد نتائج', comment: 'Search Results Text'},
      'Notes': {id: 'Notes', value: 'ملاحظات', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'غير محدّد', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'قائمة رقمية', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'فتح / السابق / إغلاق', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'فتح / إغلاق', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'قائمة مرتبة', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'صفحة ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'صفحة {0} من {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'أنت موجود حالياً بالصفحة ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'لصق', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<div class="password-Tooltip"><strong>يجب أن تكون كلمة المرور:</strong><ul><li>ألا يقل عن 10 أحرف</li><li>تضم حرفاً كبيراً واحداً على الأقل</li><li>تضم حرفاً صغيراً واحداً على الأقل</li><li><strong>تضم حرف واحد خاص</strong></li><li>لا يحتوي على اسم المستخدم</li><li>لا يمكن استخدام كلمة مرور مستخدمة من قبل</li></ul></div>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'يجب أن تتطابق كلمات المرور', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'ذروة', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'أعمدة التخصيص', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'فترة', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'اضغط للأسفل لتحديد تاريخ', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'اضغط على Shift+F10 لفتح قائمة السياق.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'السابق', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'الشهر السابق', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'الصفحة السابقة', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'طباعة', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'نطاق', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} سجلات لكل صفحة', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'إعادة', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'تحديث', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'مطلوب', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'إعادة تعيين', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: 'النتائج', comment: 'As in showing N Results in a List'},
      'Right': {id: 'Right', value: 'يمين', comment: 'Right tooltip'},
      'RightAlign': {id: 'RightAlign', value: 'محاذاة إلى اليمين', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'محاذاة النص إلى اليمين', comment: 'Right Align Text tooltip'},
      'Roles': {id: 'Roles', value: 'أدوار', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'ارتفاع الصف', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'ياقوتي', comment: 'Color in our color pallette'},
      'Save': {id: 'Save', value: 'حفظ', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'حفظ طريقة العرض الحالية', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'طرق عرض محفوظة', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: 'بحث', comment: 'Search tooltip'},
      'SearchFolder': {id: 'SearchFolder', value: 'مجلد البحث', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'قائمة البحث', comment: 'Search List tooltip'},
      'Selected': {id: 'Selected', value: 'محدّد', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'إرسال', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'تعيين الوقت', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'الإعدادات', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'قصير', comment: 'Describes a Shorted Row Height in a grid/list'},
      'Slate': {id: 'Slate', value: 'أردوازي', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'مؤشر لـ', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'الحد الأقصى لمؤشر لـ', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'الحد الأدنى لمؤشر لـ', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'التخطي إلى المحتوى الأساسي', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'يتوسطه خط', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'فرز من أ إلى ي', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'فرز من ي إلى أ', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'فرز لأسفل', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'فرز لأعلى', comment: 'Sort Up tooltip'},
      'Subscript': {id: 'Subscript', value: 'منخفض', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'مرتفع', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tack': {id: 'Tack', value: 'رمز', comment: 'Tack tooltip'},
      'Tall': {id: 'Tall', value: 'طويل', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'المؤقت', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'اليوم', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'تبديل النص الغامق', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'تبديل العنوان 3', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'تبديل العنوان 4', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'تبديل النص المائل', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'تبديل تسطير النص', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'شريط الأدوات', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'محاذاة لأعلى', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'إجمالي', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'شجرة الطي', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'شجرة التوسيع', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'تركوازي', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'أعلى', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'تحميل', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'تاريخ غير متوفر', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'تسطير', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'تراجع', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'غير مؤمّن', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'قائمة غير مرتبة', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'هذا المحتوى غير متوفر لأنه يستخدم ميزات غير معتمدة من إصدار المتصفّح الذي تستخدمه.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'عنوان Url', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. استخدم مفاتيح الأسهم للتحديد.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. استخدم مفتاح enter أو السهم لأسفل للبحث.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'مستخدم', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'ملف تعريف المستخدم', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'محاذاة عمودية إلى المنتصف', comment: 'Vertical Middle Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'عرض المصدر', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'طريقة عرض مرئية', comment: 'Toggle the visual view in the editor'}
    }
  });
}));
