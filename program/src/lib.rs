use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
use std::mem::size_of;
use std::collections::HashMap;



declare_id!("DHBTg3qqcj3Hr1rWDp8SmQKV1d6E8YH4DGzFfdjmP23A");

#[program]
pub mod book_now{

    use super::*;
    pub fn create_theater_account(
        ctx: Context<CreateTheaterAccount>,
        theater_name: String,
        theater_address: String,
        theater_inview_url: String,
    ) -> ProgramResult {

    if (    theater_address.trim().is_empty() || 
            theater_name.trim().is_empty() || 
            theater_inview_url.trim().is_empty()
    ){
            msg!(" Inputs you were provided is Invalid, check again before submit. ");
            Err(ProgramError::InvalidInstructionData)
        }

    let user = &mut ctx.accounts.user;
    user.wallet_address = &mut ctx.accounts.authority.key();
    user.theater_name = theater_name;
    user.theater_address = theater_address;
    user.theater_inview_url = theater_inview_url;
    user.movie_posters = 0_i32;
    user.upload_movies = 0_i32;
    user.tokens = 0_f64;

    Ok(())
    }

    pub fn upload_movie_poster(
        ctx: Context<UploadMoviePoster>,
        movie_name: String,
        actors: Vec<&str>,
        genres: Vec<&str>,
        language: String,
        price: f32,
        poster: String,
    ) -> ProgramResult {
        if (
            movie_name.trim().is_empty() || 
            poster.trim().is_empty() || 
            language.trim().is_empty() || 
            price <= 0.0
        ){
            msg!(" Inputs you were provided is Invalid, check again before submit. ");
            Err(ProgramError::InvalidInstructionData)
        }

        if (actors.len() == 0 || genres.len() == 0) {
            msg!(" Inputs you were provided is Invalid, check again before submit. ");
            Err(ProgramError::InvalidInstructionData)
        }

        let upload_movie_details = &mut ctx.accounts.upload_movie_details;
        upload_movie_details.movie_uploader = &mut ctx.account.authority.key();
        
        upload_movie_details.movie_name = movie_name;
        upload_movie_details.language = language;
        upload_movie_details.poster = poster;

        upload_movie_details.price = price;

        upload_movie_details.actors = actors;
        upload_movie_details.genres = genres;

        upload_movie_details.likes = 0_u8;
        upload_movie_details.dislikes = 0_u8;

        upload_movie_details.rating = vec![0_u8];

        upload_movie_details.who_like = vec![];
        upload_movie_details.who_dislike = vec![];
        upload_movie_details.who_rated = vec![];


        upload_movie_details.seats = HashMap::from([
            ("A1",""),("B1",""),("C1",""),("D1",""),("E1",""),("F1",""),
            ("G1",""),("H1",""),("I1",""),("J1",""),("A2",""),("B2",""),
            ("C2",""),("D2",""),("E2",""),("F2",""),("G2",""),("H2",""),
            ("I2",""),("J2",""),("A3",""),("B3",""),("C3",""),("D3",""),
            ("E3",""),("F3",""),("G3",""),("H3",""),("I3",""),("J3",""),
            ("A4",""),("B4",""),("C4",""),("D4",""),("E4",""),("F4",""),
            ("G4",""),("H4",""),("I4",""),("J4",""),("A5",""),("B5",""),
            ("C5",""),("D5",""),("E5",""),("F5",""),("G5",""),("H5",""),
            ("I5",""),("J5",""),("A6",""),("B6",""),("C6",""),("D6",""),
            ("E6",""),("F6",""),("G6",""),("H6",""),("I6",""),("J6",""),
            ("A7",""),("B7",""),("C7",""),("D7",""),("E7",""),("F7",""),
            ("G7",""),("H7",""),("I7",""),("J7",""),("A8",""),("B8",""),
            ("C8",""),("D8",""),("E8",""),("F8",""),("G8",""),("H8",""),
            ("I8",""),("J8","")
        ]);


        Ok(())
    }

    pub fn book_seats(
        ctx: Context<BookSeats>,
        seats: Vec<&str>,
    ) -> ProgramResult {

        if (seats.len() == 0){
            msg!(" Inputs you were provided is Invalid, check again before submit. ");
            Err(ProgramError::InvalidInstructionData)
        }

        let movie = &mut ctx.accounts.movie;
        let key = &mut ctx.accounts.authority.key();


        for i in seats.iter(){
            if (movie.seats[i] != ""){
                msg!(" Inputs you were provided is Invalid, check again before submit. ");
                Err(ProgramError::InvalidInstructionData)
            }
        }

        // check buyer_program_acccount money

        // if buyer_account money is less then 
        // 

        for i in seats.iter(){
            movie.seats[i] = key;
        }

        // transfer sols to system program,
        // increase creator balance
        //let = 

        Ok(())

    }

    //pub fn add_likes
       

}


#[derive(Accounts)]
pub struct BookSeats<'info>{

    #[account(mut)]
    pub movie: Account<'info, CreateMoviePoster>,

    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: UncheckedAccount<'info>, 

}



#[derive(Accounts)]
pub struct UploadMoviePoster<'info>{
    #[account(
            init, seeds = [b"upload_movie_details".as_ref(),authority.key().as_ref()], bump,
            payer = authority, space = size_of::<CreateMoviePoster>() + 64
        )]
    pub upload_movie_details: Account<'info, CreateMoviePoster>,
    
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: UncheckedAccount<'info>, 

}

#[account]
pub struct CreateMoviePoster{
    pub movie_uploader: Pubkey,

    pub movie_name: String,
    pub language: String,
    pub poster: String,

    pub actors: Vec<&'a str>,
    pub genres: Vec<&'a str>,

    pub price: f32,
    pub likes: u8,
    pub dislikes: u8,
    pub rating: Vec<u8>,

    pub who_like: Vec<Pubkey>,
    pub who_dislike: Vec<Pubkey>,
    pub who_rated: Vec<Pubkey>,

    pub seats: HashMap<&'a str, &'a str>,

}






#[derive(Accounts)]
pub struct CreateTheaterAccount<'info> {
    #[account(
        init, seeds = [b"user".as_ref(),authority.key().as_ref()],bump,
        payer = authority, space = size_of::<CreateAccount>() + 32
    )]
    pub user: Account<'info, CreateAccount>,
    
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: UncheckedAccount<'info>, 

}

#[account]
pub struct CreateAccount{
    pub wallet_address: Pubkey,

    pub theater_name: String,
    pub theater_address: String,
    pub theater_inview_url: String,

    pub movie_posters: i32,
    pub upload_movies: i32,
    pub tokens: f64,
}