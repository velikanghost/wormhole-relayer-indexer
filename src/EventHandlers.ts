/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  WormholeRelayer,
  WormholeRelayer_AdminChanged,
  WormholeRelayer_BeaconUpgraded,
  WormholeRelayer_ContractUpgraded,
  WormholeRelayer_Delivery,
  WormholeRelayer_SendEvent,
  WormholeRelayer_Upgraded,
} from "generated";

WormholeRelayer.AdminChanged.handler(async ({ event, context }) => {
  const entity: WormholeRelayer_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.WormholeRelayer_AdminChanged.set(entity);
});

WormholeRelayer.BeaconUpgraded.handler(async ({ event, context }) => {
  const entity: WormholeRelayer_BeaconUpgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    beacon: event.params.beacon,
  };

  context.WormholeRelayer_BeaconUpgraded.set(entity);
});

WormholeRelayer.ContractUpgraded.handler(async ({ event, context }) => {
  const entity: WormholeRelayer_ContractUpgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldContract: event.params.oldContract,
    newContract: event.params.newContract,
  };

  context.WormholeRelayer_ContractUpgraded.set(entity);
});

WormholeRelayer.Delivery.handler(async ({ event, context }) => {
  const entity: WormholeRelayer_Delivery = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    recipientContract: event.params.recipientContract,
    sourceChain: event.params.sourceChain,
    sequence: event.params.sequence,
    deliveryVaaHash: event.params.deliveryVaaHash,
    status: event.params.status,
    gasUsed: event.params.gasUsed,
    refundStatus: event.params.refundStatus,
    additionalStatusInfo: event.params.additionalStatusInfo,
    overridesInfo: event.params.overridesInfo,
  };

  context.WormholeRelayer_Delivery.set(entity);
});

WormholeRelayer.SendEvent.handler(async ({ event, context }) => {
  const entity: WormholeRelayer_SendEvent = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sequence: event.params.sequence,
    deliveryQuote: event.params.deliveryQuote,
    paymentForExtraReceiverValue: event.params.paymentForExtraReceiverValue,
  };

  context.WormholeRelayer_SendEvent.set(entity);
});

WormholeRelayer.Upgraded.handler(async ({ event, context }) => {
  const entity: WormholeRelayer_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.WormholeRelayer_Upgraded.set(entity);
});
