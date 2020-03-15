using System.Collections.Generic;
using Flipi.Flights.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Flipi.Flights.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FlightsController : ControllerBase
    {
        private readonly IFlightsService _flightsService;

        private readonly ILogger<FlightsController> _logger;

        public FlightsController(IFlightsService flightsService, ILogger<FlightsController> logger)
        {
            _logger = logger;
            _flightsService = flightsService;
        }

        [HttpGet]
        public IEnumerable<Flight> Get()
        {
            _logger.LogInformation("FlightsController.Get method called.");
            return _flightsService.GetFlights();
        }
    }
}
