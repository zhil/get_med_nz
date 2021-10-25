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


exports.AdverseReaction_Cancel = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AdverseReaction = {
  templateId: '7c3150d57f2298e64549bbbbc07944a2ae8d512b4c84d618ca189a50f813e95f:Reactions:AdverseReaction',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({messageSenderAdverse: damlTypes.List(damlTypes.Party).decoder, multipleObserversAdverse: damlTypes.List(damlTypes.Party).decoder, messageContentAdverse: exports.ShortMessageReaction.decoder, }); }),
  encode: function (__typed__) {
  return {
    messageSenderAdverse: damlTypes.List(damlTypes.Party).encode(__typed__.messageSenderAdverse),
    multipleObserversAdverse: damlTypes.List(damlTypes.Party).encode(__typed__.multipleObserversAdverse),
    messageContentAdverse: exports.ShortMessageReaction.encode(__typed__.messageContentAdverse),
  };
}
,
  Archive: {
    template: function () { return exports.AdverseReaction; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AdverseReaction_Cancel: {
    template: function () { return exports.AdverseReaction; },
    choiceName: 'AdverseReaction_Cancel',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AdverseReaction_Cancel.decoder; }),
    argumentEncode: function (__typed__) { return exports.AdverseReaction_Cancel.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.AdverseReaction);



exports.ShortMessageReaction = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({shortMessageChoice: damlTypes.Optional(exports.MessageChoiceReaction).decoder, shortMessageSenderName: damlTypes.Text.decoder, shortMessageSenderContact: damlTypes.Text.decoder, shortMessageNotes: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    shortMessageChoice: damlTypes.Optional(exports.MessageChoiceReaction).encode(__typed__.shortMessageChoice),
    shortMessageSenderName: damlTypes.Text.encode(__typed__.shortMessageSenderName),
    shortMessageSenderContact: damlTypes.Text.encode(__typed__.shortMessageSenderContact),
    shortMessageNotes: damlTypes.Text.encode(__typed__.shortMessageNotes),
  };
}
,
};



exports.MessageChoiceReaction = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({bodyofMessage: exports.LongMessageReaction.decoder, contactNumber: damlTypes.Text.decoder, replyRequired: damlTypes.Bool.decoder, dateOfMessage: damlTypes.Date.decoder, }); }),
  encode: function (__typed__) {
  return {
    bodyofMessage: exports.LongMessageReaction.encode(__typed__.bodyofMessage),
    contactNumber: damlTypes.Text.encode(__typed__.contactNumber),
    replyRequired: damlTypes.Bool.encode(__typed__.replyRequired),
    dateOfMessage: damlTypes.Date.encode(__typed__.dateOfMessage),
  };
}
,
};



exports.LongMessageReaction = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({messageSender: damlTypes.Text.decoder, patientName: damlTypes.Text.decoder, patientGender: damlTypes.Text.decoder, medicationName: damlTypes.Text.decoder, medicationIssue: damlTypes.Date.decoder, outlineReaction: damlTypes.Text.decoder, aedRequired: damlTypes.Bool.decoder, contactNumber: damlTypes.Text.decoder, dateOfMessage: damlTypes.Date.decoder, }); }),
  encode: function (__typed__) {
  return {
    messageSender: damlTypes.Text.encode(__typed__.messageSender),
    patientName: damlTypes.Text.encode(__typed__.patientName),
    patientGender: damlTypes.Text.encode(__typed__.patientGender),
    medicationName: damlTypes.Text.encode(__typed__.medicationName),
    medicationIssue: damlTypes.Date.encode(__typed__.medicationIssue),
    outlineReaction: damlTypes.Text.encode(__typed__.outlineReaction),
    aedRequired: damlTypes.Bool.encode(__typed__.aedRequired),
    contactNumber: damlTypes.Text.encode(__typed__.contactNumber),
    dateOfMessage: damlTypes.Date.encode(__typed__.dateOfMessage),
  };
}
,
};

