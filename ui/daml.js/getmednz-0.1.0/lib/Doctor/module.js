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


exports.TransferMedications_Cancel = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.TransferMedications_Action = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.PrescriptAuth = {
  templateId: '7c3150d57f2298e64549bbbbc07944a2ae8d512b4c84d618ca189a50f813e95f:Doctor:PrescriptAuth',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({senderPrescriptAuth: damlTypes.Party.decoder, ownerPrescriptAuth: damlTypes.Party.decoder, patientSummary: exports.PatientSummary.decoder, patientMedications: exports.ShortMessageList.decoder, }); }),
  encode: function (__typed__) {
  return {
    senderPrescriptAuth: damlTypes.Party.encode(__typed__.senderPrescriptAuth),
    ownerPrescriptAuth: damlTypes.Party.encode(__typed__.ownerPrescriptAuth),
    patientSummary: exports.PatientSummary.encode(__typed__.patientSummary),
    patientMedications: exports.ShortMessageList.encode(__typed__.patientMedications),
  };
}
,
  TransferMedications_Action: {
    template: function () { return exports.PrescriptAuth; },
    choiceName: 'TransferMedications_Action',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.TransferMedications_Action.decoder; }),
    argumentEncode: function (__typed__) { return exports.TransferMedications_Action.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PrescriptAuth).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PrescriptAuth).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.PrescriptAuth; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  TransferMedications_Cancel: {
    template: function () { return exports.PrescriptAuth; },
    choiceName: 'TransferMedications_Cancel',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.TransferMedications_Cancel.decoder; }),
    argumentEncode: function (__typed__) { return exports.TransferMedications_Cancel.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.PrescriptAuth);



exports.ShortMessageList = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({prescriptionChoice: damlTypes.Optional(exports.MessageChoicePrescript).decoder, prescriptionNotes: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    prescriptionChoice: damlTypes.Optional(exports.MessageChoicePrescript).encode(__typed__.prescriptionChoice),
    prescriptionNotes: damlTypes.Text.encode(__typed__.prescriptionNotes),
  };
}
,
};



exports.MessageChoicePrescript = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({items: damlTypes.List(exports.LongMessageMedication).decoder, dateOfIssue: damlTypes.Date.decoder, }); }),
  encode: function (__typed__) {
  return {
    items: damlTypes.List(exports.LongMessageMedication).encode(__typed__.items),
    dateOfIssue: damlTypes.Date.encode(__typed__.dateOfIssue),
  };
}
,
};



exports.LongMessageMedication = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({tabletName: damlTypes.Text.decoder, tabletQuantity: damlTypes.Int.decoder, tableRepeat: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    tabletName: damlTypes.Text.encode(__typed__.tabletName),
    tabletQuantity: damlTypes.Int.encode(__typed__.tabletQuantity),
    tableRepeat: damlTypes.Bool.encode(__typed__.tableRepeat),
  };
}
,
};



exports.PatientSummary = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({consultingRooms: damlTypes.Bool.decoder, patientName: damlTypes.Text.decoder, patientDob: damlTypes.Text.decoder, patientNew: damlTypes.Bool.decoder, patientCode: damlTypes.Int.decoder, patientGender: damlTypes.Text.decoder, patientType: damlTypes.Int.decoder, dateOfConsult: damlTypes.Date.decoder, consultNotes: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    consultingRooms: damlTypes.Bool.encode(__typed__.consultingRooms),
    patientName: damlTypes.Text.encode(__typed__.patientName),
    patientDob: damlTypes.Text.encode(__typed__.patientDob),
    patientNew: damlTypes.Bool.encode(__typed__.patientNew),
    patientCode: damlTypes.Int.encode(__typed__.patientCode),
    patientGender: damlTypes.Text.encode(__typed__.patientGender),
    patientType: damlTypes.Int.encode(__typed__.patientType),
    dateOfConsult: damlTypes.Date.encode(__typed__.dateOfConsult),
    consultNotes: damlTypes.Text.encode(__typed__.consultNotes),
  };
}
,
};



exports.ArchiveConsult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({closingParty: damlTypes.Party.decoder, closingNotes: damlTypes.Text.decoder, closingDate: damlTypes.Date.decoder, }); }),
  encode: function (__typed__) {
  return {
    closingParty: damlTypes.Party.encode(__typed__.closingParty),
    closingNotes: damlTypes.Text.encode(__typed__.closingNotes),
    closingDate: damlTypes.Date.encode(__typed__.closingDate),
  };
}
,
};



exports.CompleteConsult = {
  templateId: '7c3150d57f2298e64549bbbbc07944a2ae8d512b4c84d618ca189a50f813e95f:Doctor:CompleteConsult',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({completeMedcen: damlTypes.Party.decoder, completeDoctor: damlTypes.Party.decoder, completePatient: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    completeMedcen: damlTypes.Party.encode(__typed__.completeMedcen),
    completeDoctor: damlTypes.Party.encode(__typed__.completeDoctor),
    completePatient: damlTypes.Party.encode(__typed__.completePatient),
  };
}
,
  ArchiveConsult: {
    template: function () { return exports.CompleteConsult; },
    choiceName: 'ArchiveConsult',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ArchiveConsult.decoder; }),
    argumentEncode: function (__typed__) { return exports.ArchiveConsult.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.CompleteConsult).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.CompleteConsult).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.CompleteConsult; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.CompleteConsult);



exports.CompleteConsult_Action = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.CompleteConsult_Cancel = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ContinueConsult_Terminate = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ContinueConsult_Cancel = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ContinueConsult_Start = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ContinueConsult_Stop = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ContinueConsult = {
  templateId: '7c3150d57f2298e64549bbbbc07944a2ae8d512b4c84d618ca189a50f813e95f:Doctor:ContinueConsult',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({continueMedcen: damlTypes.Party.decoder, continueDoctor: damlTypes.Party.decoder, continuePatient: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    continueMedcen: damlTypes.Party.encode(__typed__.continueMedcen),
    continueDoctor: damlTypes.Party.encode(__typed__.continueDoctor),
    continuePatient: damlTypes.Party.encode(__typed__.continuePatient),
  };
}
,
  ContinueConsult_Stop: {
    template: function () { return exports.ContinueConsult; },
    choiceName: 'ContinueConsult_Stop',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ContinueConsult_Stop.decoder; }),
    argumentEncode: function (__typed__) { return exports.ContinueConsult_Stop.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ContinueConsult_Start: {
    template: function () { return exports.ContinueConsult; },
    choiceName: 'ContinueConsult_Start',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ContinueConsult_Start.decoder; }),
    argumentEncode: function (__typed__) { return exports.ContinueConsult_Start.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ContinueConsult).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ContinueConsult).encode(__typed__); },
  },
  ContinueConsult_Cancel: {
    template: function () { return exports.ContinueConsult; },
    choiceName: 'ContinueConsult_Cancel',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ContinueConsult_Cancel.decoder; }),
    argumentEncode: function (__typed__) { return exports.ContinueConsult_Cancel.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ContinueConsult_Terminate: {
    template: function () { return exports.ContinueConsult; },
    choiceName: 'ContinueConsult_Terminate',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ContinueConsult_Terminate.decoder; }),
    argumentEncode: function (__typed__) { return exports.ContinueConsult_Terminate.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CompleteConsult_Cancel: {
    template: function () { return exports.ContinueConsult; },
    choiceName: 'CompleteConsult_Cancel',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CompleteConsult_Cancel.decoder; }),
    argumentEncode: function (__typed__) { return exports.CompleteConsult_Cancel.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CompleteConsult_Action: {
    template: function () { return exports.ContinueConsult; },
    choiceName: 'CompleteConsult_Action',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CompleteConsult_Action.decoder; }),
    argumentEncode: function (__typed__) { return exports.CompleteConsult_Action.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.CompleteConsult).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.CompleteConsult).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ContinueConsult; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ContinueConsult);



exports.ContinueConsult_Action = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ContinueConsult_Cease = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.CommenceConsult_Terminate = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.CommenceConsult_Stop = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.CommenceConsult_Cancel = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.CommenceConsult_Start = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.CommenceConsult = {
  templateId: '7c3150d57f2298e64549bbbbc07944a2ae8d512b4c84d618ca189a50f813e95f:Doctor:CommenceConsult',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({commenceMedcen: damlTypes.Party.decoder, commenceDoctor: damlTypes.Party.decoder, commencePatient: damlTypes.Party.decoder, commenceDetails: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    commenceMedcen: damlTypes.Party.encode(__typed__.commenceMedcen),
    commenceDoctor: damlTypes.Party.encode(__typed__.commenceDoctor),
    commencePatient: damlTypes.Party.encode(__typed__.commencePatient),
    commenceDetails: damlTypes.Text.encode(__typed__.commenceDetails),
  };
}
,
  CommenceConsult_Start: {
    template: function () { return exports.CommenceConsult; },
    choiceName: 'CommenceConsult_Start',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CommenceConsult_Start.decoder; }),
    argumentEncode: function (__typed__) { return exports.CommenceConsult_Start.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.CommenceConsult).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.CommenceConsult).encode(__typed__); },
  },
  CommenceConsult_Cancel: {
    template: function () { return exports.CommenceConsult; },
    choiceName: 'CommenceConsult_Cancel',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CommenceConsult_Cancel.decoder; }),
    argumentEncode: function (__typed__) { return exports.CommenceConsult_Cancel.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CommenceConsult_Stop: {
    template: function () { return exports.CommenceConsult; },
    choiceName: 'CommenceConsult_Stop',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CommenceConsult_Stop.decoder; }),
    argumentEncode: function (__typed__) { return exports.CommenceConsult_Stop.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CommenceConsult_Terminate: {
    template: function () { return exports.CommenceConsult; },
    choiceName: 'CommenceConsult_Terminate',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CommenceConsult_Terminate.decoder; }),
    argumentEncode: function (__typed__) { return exports.CommenceConsult_Terminate.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ContinueConsult_Cease: {
    template: function () { return exports.CommenceConsult; },
    choiceName: 'ContinueConsult_Cease',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ContinueConsult_Cease.decoder; }),
    argumentEncode: function (__typed__) { return exports.ContinueConsult_Cease.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ContinueConsult_Action: {
    template: function () { return exports.CommenceConsult; },
    choiceName: 'ContinueConsult_Action',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ContinueConsult_Action.decoder; }),
    argumentEncode: function (__typed__) { return exports.ContinueConsult_Action.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ContinueConsult).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ContinueConsult).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.CommenceConsult; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.CommenceConsult);



exports.DetailsCommenceConsult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({consultRooms: damlTypes.Bool.decoder, covidRelated: damlTypes.Bool.decoder, consultName: damlTypes.Party.decoder, consultType: damlTypes.Int.decoder, consultDate: damlTypes.Date.decoder, consultNotes: damlTypes.Text.decoder, consultSpecialAccess: damlTypes.Bool.decoder, consultAccessDetails: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    consultRooms: damlTypes.Bool.encode(__typed__.consultRooms),
    covidRelated: damlTypes.Bool.encode(__typed__.covidRelated),
    consultName: damlTypes.Party.encode(__typed__.consultName),
    consultType: damlTypes.Int.encode(__typed__.consultType),
    consultDate: damlTypes.Date.encode(__typed__.consultDate),
    consultNotes: damlTypes.Text.encode(__typed__.consultNotes),
    consultSpecialAccess: damlTypes.Bool.encode(__typed__.consultSpecialAccess),
    consultAccessDetails: damlTypes.Text.encode(__typed__.consultAccessDetails),
  };
}
,
};

