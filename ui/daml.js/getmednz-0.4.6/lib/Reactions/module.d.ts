// Generated from Reactions.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type AdverseReaction_Cancel = {
};

export declare const AdverseReaction_Cancel:
  damlTypes.Serializable<AdverseReaction_Cancel> & {
  }
;


export declare type AdverseReaction = {
  messageSenderAdverse: damlTypes.Party[];
  multipleObserversAdverse: damlTypes.Party[];
  messageContentAdverse: ShortMessageReaction;
};

export declare const AdverseReaction:
  damlTypes.Template<AdverseReaction, undefined, '10cce1a7e48a84867656500c85211e3a63e518366fde0144aff6d29dc29a4dce:Reactions:AdverseReaction'> & {
  Archive: damlTypes.Choice<AdverseReaction, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AdverseReaction_Cancel: damlTypes.Choice<AdverseReaction, AdverseReaction_Cancel, {}, undefined>;
};

export declare namespace AdverseReaction {
  export type CreateEvent = damlLedger.CreateEvent<AdverseReaction, undefined, typeof AdverseReaction.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AdverseReaction, typeof AdverseReaction.templateId>
  export type Event = damlLedger.Event<AdverseReaction, undefined, typeof AdverseReaction.templateId>
  export type QueryResult = damlLedger.QueryResult<AdverseReaction, undefined, typeof AdverseReaction.templateId>
}



export declare type ShortMessageReaction = {
  shortMessageChoice: damlTypes.Optional<MessageChoiceReaction>;
  shortMessageSenderName: string;
  shortMessageSenderContact: string;
  shortMessageNotes: string;
};

export declare const ShortMessageReaction:
  damlTypes.Serializable<ShortMessageReaction> & {
  }
;


export declare type MessageChoiceReaction = {
  bodyofMessage: LongMessageReaction;
  contactNumber: string;
  replyRequired: boolean;
  dateOfMessage: damlTypes.Date;
};

export declare const MessageChoiceReaction:
  damlTypes.Serializable<MessageChoiceReaction> & {
  }
;


export declare type LongMessageReaction = {
  messageSender: string;
  patientName: string;
  patientGender: string;
  medicationName: string;
  medicationIssue: damlTypes.Date;
  outlineReaction: string;
  aedRequired: boolean;
  contactNumber: string;
  dateOfMessage: damlTypes.Date;
};

export declare const LongMessageReaction:
  damlTypes.Serializable<LongMessageReaction> & {
  }
;

