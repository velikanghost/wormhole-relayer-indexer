import assert from "assert";
import { 
  TestHelpers,
  WormholeRelayer_AdminChanged
} from "generated";
const { MockDb, WormholeRelayer } = TestHelpers;

describe("WormholeRelayer contract AdminChanged event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for WormholeRelayer contract AdminChanged event
  const event = WormholeRelayer.AdminChanged.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("WormholeRelayer_AdminChanged is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await WormholeRelayer.AdminChanged.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualWormholeRelayerAdminChanged = mockDbUpdated.entities.WormholeRelayer_AdminChanged.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedWormholeRelayerAdminChanged: WormholeRelayer_AdminChanged = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      previousAdmin: event.params.previousAdmin,
      newAdmin: event.params.newAdmin,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualWormholeRelayerAdminChanged, expectedWormholeRelayerAdminChanged, "Actual WormholeRelayerAdminChanged should be the same as the expectedWormholeRelayerAdminChanged");
  });
});
