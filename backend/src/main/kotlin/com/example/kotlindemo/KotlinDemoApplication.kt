package com.example.kotlindemo

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.http.HttpMethod
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter
import java.util.Arrays
import java.util.Collections
import java.util.stream.Collectors


@SpringBootApplication
class KotlinDemoApplication {
    @Bean
    fun corsFilter(): CorsFilter {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()
        config.allowCredentials = false
        config.allowedOrigins = Collections.singletonList("*")
        config.allowedHeaders = Collections.singletonList("*")
        config.allowedMethods = Collections.singletonList("*")
        source.registerCorsConfiguration("/**", config)

        return CorsFilter(source)
    }

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            SpringApplication.run(KotlinDemoApplication::class.java, *args)
        }
    }
}
