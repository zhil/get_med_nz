"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.ConfirmedVisit_Cancel = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ConfirmedVisit_Reject = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ConfirmedVisit_Accept = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ConfirmedVisit = {
  templateId: '7c3150d57f2298e64549bbbbc07944a2ae8d512b4c84d618ca189a50f813e95f:Medcenter:ConfirmedVisit',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({messageSenderConfirm: damlTypes.Party.decoder, multipleObserversConfirm: damlTypes.List(damlTypes.Party).decoder, messageContentConfirm: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    messageSenderConfirm: damlTypes.Party.encode(__typed__.messageSenderConfirm),
    multipleObserversConfirm: damlTypes.List(damlTypes.Party).encode(__typed__.multipleObserversConfirm),
    messageContentConfirm: damlTypes.Text.encode(__typed__.messageContentConfirm),
  };
}
,
  ConfirmedVisit_Cancel: {
    template: function () { return exports.ConfirmedVisit; },
    choiceName: 'ConfirmedVisit_Cancel',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ConfirmedVisit_Cancel.decoder; }),
    argumentEncode: function (__typed__) { return exports.ConfirmedVisit_Cancel.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ConfirmedVisit; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ConfirmedVisit_Reject: {
    template: function () { return exports.ConfirmedVisit; },
    choiceName: 'ConfirmedVisit_Reject',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ConfirmedVisit_Reject.decoder; }),
    argumentEncode: function (__typed__) { return exports.ConfirmedVisit_Reject.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ConfirmedVisit_Accept: {
    template: function () { return exports.ConfirmedVisit; },
    choiceName: 'ConfirmedVisit_Accept',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ConfirmedVisit_Accept.decoder; }),
    argumentEncode: function (__typed__) { return exports.ConfirmedVisit_Accept.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ConfirmedVisit).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ConfirmedVisit).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ConfirmedVisit);



exports.ConfirmedVisitDetails = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({confirmedPatientName: damlTypes.Party.decoder, confirmedPatientDob: damlTypes.Text.decoder, confirmedPatientMessage: damlTypes.Text.decoder, confirmedPatientAssistance: damlTypes.Bool.decoder, confirmedAssistanceType: damlTypes.Text.decoder, confirmedPatientChaperone: damlTypes.Bool.decoder, confirmedPatientDate: damlTypes.Date.decoder, confirmedPatientContactNumber: damlTypes.Text.decoder, confirmedMessageDate: damlTypes.Date.decoder, }); }),
  encode: function (__typed__) {
  return {
    confirmedPatientName: damlTypes.Party.encode(__typed__.confirmedPatientName),
    confirmedPatientDob: damlTypes.Text.encode(__typed__.confirmedPatientDob),
    confirmedPatientMessage: damlTypes.Text.encode(__typed__.confirmedPatientMessage),
    confirmedPatientAssistance: damlTypes.Bool.encode(__typed__.confirmedPatientAssistance),
    confirmedAssistanceType: damlTypes.Text.encode(__typed__.confirmedAssistanceType),
    confirmedPatientChaperone: damlTypes.Bool.encode(__typed__.confirmedPatientChaperone),
    confirmedPatientDate: damlTypes.Date.encode(__typed__.confirmedPatientDate),
    confirmedPatientContactNumber: damlTypes.Text.encode(__typed__.confirmedPatientContactNumber),
    confirmedMessageDate: damlTypes.Date.encode(__typed__.confirmedMessageDate),
  };
}
,
};



exports.RequestVisit_Deny = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RequestVisit_Accept = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RequestVisit_Submit = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RequestVisit = {
  templateId: '7c3150d57f2298e64549bbbbc07944a2ae8d512b4c84d618ca189a50f813e95f:Medcenter:RequestVisit',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({messageSenderRequest: damlTypes.Party.decoder, multipleObserversRequest: damlTypes.List(damlTypes.Party).decoder, messageContentRequest: exports.RequestVisitDetails.decoder, }); }),
  encode: function (__typed__) {
  return {
    messageSenderRequest: damlTypes.Party.encode(__typed__.messageSenderRequest),
    multipleObserversRequest: damlTypes.List(damlTypes.Party).encode(__typed__.multipleObserversRequest),
    messageContentRequest: exports.RequestVisitDetails.encode(__typed__.messageContentRequest),
  };
}
,
  RequestVisit_Deny: {
    template: function () { return exports.RequestVisit; },
    choiceName: 'RequestVisit_Deny',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestVisit_Deny.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestVisit_Deny.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.RequestVisit; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  RequestVisit_Accept: {
    template: function () { return exports.RequestVisit; },
    choiceName: 'RequestVisit_Accept',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestVisit_Accept.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestVisit_Accept.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  RequestVisit_Submit: {
    template: function () { return exports.RequestVisit; },
    choiceName: 'RequestVisit_Submit',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestVisit_Submit.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestVisit_Submit.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RequestVisit).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RequestVisit).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.RequestVisit);



exports.RequestVisitDetails = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({requestPatientName: damlTypes.Party.decoder, requestPatientDob: damlTypes.Text.decoder, requestPatientMessage: damlTypes.Text.decoder, requestPatientAssistance: damlTypes.Bool.decoder, requestAssistanceType: damlTypes.Text.decoder, requestPatientChaperone: damlTypes.Bool.decoder, requestPatientDate: damlTypes.Date.decoder, requestPatientContactNumber: damlTypes.Text.decoder, requestMessageDate: damlTypes.Date.decoder, }); }),
  encode: function (__typed__) {
  return {
    requestPatientName: damlTypes.Party.encode(__typed__.requestPatientName),
    requestPatientDob: damlTypes.Text.encode(__typed__.requestPatientDob),
    requestPatientMessage: damlTypes.Text.encode(__typed__.requestPatientMessage),
    requestPatientAssistance: damlTypes.Bool.encode(__typed__.requestPatientAssistance),
    requestAssistanceType: damlTypes.Text.encode(__typed__.requestAssistanceType),
    requestPatientChaperone: damlTypes.Bool.encode(__typed__.requestPatientChaperone),
    requestPatientDate: damlTypes.Date.encode(__typed__.requestPatientDate),
    requestPatientContactNumber: damlTypes.Text.encode(__typed__.requestPatientContactNumber),
    requestMessageDate: damlTypes.Date.encode(__typed__.requestMessageDate),
  };
}
,
};

