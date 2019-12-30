using System.Collections.Generic;

namespace Flipi.Flights.Services
{
    public interface IFlightsService
    {
        IEnumerable<Flight> GetFlights();
    }
}