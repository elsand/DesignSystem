/* globals questionnaireInteraction,
  colnavCustom,
  handleFocus,
  mobileNavigation,
  toggleFilter,
  uniformHeight,
  tooltip,
  initializeDatepicker,
  onboarding,
  nameChecker,
  codeLookup,
  setupAddRightsHandler,
  onFileInputChange,
  toggleInstant,
  switchForm,
  addListExpandHandler,
  addListSortHandler,
  setupListRowSelect,
  setupOnKeypress,
  genericSearch,
  toggleInstant,
  articleAnchors,
  feedbackToggle,
  setValidatorSettings,
  popoverLocalInit,
  popoverGlobalInit,
  setupSelectableCheckbox,
  window,
  setupTruncateLines,
  AltinnModal,
  AltinnQuickhelp
 */


window.sharedInit = function() {
  setValidatorSettings();
  addListExpandHandler();
  setupOnKeypress();
  handleFocus();
  initializeDatepicker();
  addListSortHandler();
  mobileNavigation();
  toggleFilter();
  tooltip();
  toggleInstant();
  feedbackToggle();
  popoverLocalInit();
  popoverGlobalInit();
  setupSelectableCheckbox();
  setupTruncateLines();
  AltinnModal.init();
  AltinnQuickhelp.init();
};

window.sharedInit();
