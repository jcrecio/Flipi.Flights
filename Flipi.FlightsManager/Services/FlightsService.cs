using MongoDB.Driver;
using System.Collections.Generic;

namespace Flipi.Flights.Services
{
    public class FlightsService : IFlightsService
    {
        private readonly IMongoCollection<Flight> _flights;

        public FlightsService()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("FlightsContainer");

            _flights = database.GetCollection<Flight>("flights");
        }

        public IEnumerable<Flight> GetFlights()
        {
            return _flights.Find(f => true).ToList();
        }
    }
}
