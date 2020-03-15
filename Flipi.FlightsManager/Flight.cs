using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Flipi.Flights
{
    public class Flight
    {
		[BsonId]
		[BsonRepresentation(BsonType.ObjectId)]
		public string Id { get; set; }
		public string flightReference { get; set; }
		public string maxPrice { get; set; }
		public string from { get; set; }
		public string to { get; set; }
		public string requestId { get; set; }
	}
}
