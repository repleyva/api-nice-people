
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

            string weather = "https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid=7811643fbf7e9082211e1353c932fab0";
            string news = "http://api.mediastack.com/v1/news?access_key=7e518e43ad5ebc4f8cee265da95d51b7&keywords="+search;
            var jsonWeather = new WebClient().DownloadString(weather);
            var jsonNews = new WebClient().DownloadString(news);

            string json = JsonConvert.SerializeObject(new
            {
                results = new List<object>()
                {
                    new Result{ weather = jsonWeather},
                    new News{ news = jsonNews },
                }
            }) ; 

            //dynamic m = JsonConvert.DeserializeObject(json);
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
