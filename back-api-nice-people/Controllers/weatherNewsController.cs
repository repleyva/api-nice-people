
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Text.Json.Serialization;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace back_api_nice_people.NewFolder
{
    [Route("api/[controller]")]
    [ApiController]
    public class weatherNewsController : ControllerBase
    {

        [HttpGet("{search}")]
        public string Get(string search)
        {
            string error = "";
            string weather = "https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid=7811643fbf7e9082211e1353c932fab0";
            string news = "http://api.mediastack.com/v1/news?access_key=7e518e43ad5ebc4f8cee265da95d51b7&keywords="+search;
            var jsonWeather = "";
            var jsonNews = "";
            try
            {
                jsonWeather = new WebClient().DownloadString(weather);
                jsonNews = new WebClient().DownloadString(news);

            } catch (WebException e)
            {
                error = JsonConvert.SerializeObject(new
                {
                    results = new List<object>()
                {
                    new Error {error=true, cod="404", message=e.Message}
                }
                });
                return error;
            }
            
            string json = JsonConvert.SerializeObject(new
            {
                results = new List<object>()
                {
                    new Result{ weather = jsonWeather},
                    new News{ news = jsonNews },
                }
            }) ;

            return json;
        }

    }
}

public class Result
{
    public string weather { get; set; }
}

public class News
{
    public string news { get; set; }
}

public class Error
{
    public bool error { get; set; }
    public string cod { get; set; }
    public string message { get; set; }
}
