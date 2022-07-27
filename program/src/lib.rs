use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
use anchor_spl::token::{self, Token};
use std::mem::size_of;
use anchor_lang::solana_program::log::{
    sol_log_compute_units
};
use std::collections::HashMap;
use solana_program::{
    program_error::ProgramError,
};

declare_id!("J3ZVazZkTDAneQ7D2Wc1ecnbfmecT1dEkGjhwbKrRrQr");

#[program]
mod book_now {
    use super::*;
    pub fn create_account(ctx: Context<CreateAccount>,
                          name: String, address : String, photo: String
                         ) -> ProgramResult {

        if name.trim().is_empty() || address.trim().is_empty() {
           msg!(" not able to create user with these inputs. ");
           return Err(ProgramError::InvalidInstructionData);
        };
        
        let user = &mut ctx.accounts.user;
        user.wallet_address = ctx.accounts.authority.key();
        user.theater_name = name;
        user.theater_address = address;
        user.theater_inview_url = photo;

        msg!("-Theater registered");
        Ok(())
    }

    pub fn create_movie(    ctx: Context<CreateMovie>,
                            name: String, genre: Vec<String>,
                            languages: Vec<String>,poster: String,
                        ) -> ProgramResult {
        // Get State
        if name.trim().is_empty() || poster.trim().is_empty() {
           msg!(" Must provide movie name and poster url. ");
           return Err(ProgramError::InvalidInstructionData);
        }
        if (languages.len() == 0 || genre.len() == 0){
           msg!(" Must provide available languages and genre ");
           return Err(ProgramError::InvalidInstructionData);
            
        }
        let movie = &mut ctx.accounts.movie;
        movie.movie_creator = ctx.accounts.authority.key();
        movie.movie_title = name;
        movie.movie_genre = genre;
        movie.movie_languages = languages;
        movie.movie_poster_url = poster;
        movie.ticket_price = 0.056 as u8;
        movie.loves = 0 as u8;
        let seat_arrangement:HashMap<String,u8> = HashMap::from([
                                (String::from("A1"),0 as u8),(String::from("B1"),0 as u8),(String::from("C1"),0 as u8),
                                (String::from("D1"),0 as u8),(String::from("E1"),0 as u8),(String::from("F1"),0 as u8),
                                (String::from("G1"),0 as u8),(String::from("H1"),0 as u8),
                                (String::from("I1"),0 as u8),(String::from("J1"),0 as u8),
                                (String::from("A2"),0 as u8),(String::from("B2"),0 as u8),(String::from("C2"),0 as u8),
                                (String::from("D2"),0 as u8),(String::from("E2"),0 as u8),(String::from("F2"),0 as u8),
                                (String::from("G2"),0 as u8),(String::from("H2"),0 as u8),
                                (String::from("I2"),0 as u8),(String::from("J2"),0 as u8),
                                (String::from("A3"),0 as u8),(String::from("B3"),0 as u8),(String::from("C3"),0 as u8),
                                (String::from("D3"),0 as u8),(String::from("E3"),0 as u8),(String::from("F3"),0 as u8),
                                (String::from("G3"),0 as u8),(String::from("H3"),0 as u8),
                                (String::from("I3"),0 as u8),(String::from("J3"),0 as u8),
                                (String::from("A4"),0 as u8),(String::from("B4"),0 as u8),(String::from("C4"),0 as u8),
                                (String::from("D4"),0 as u8),(String::from("E4"),0 as u8),(String::from("F4"),0 as u8),
                                (String::from("G4"),0 as u8),(String::from("H4"),0 as u8),
                                (String::from("I4"),0 as u8),(String::from("J4"),0 as u8),
                                (String::from("A5"),0 as u8),(String::from("B5"),0 as u8),(String::from("C5"),0 as u8),
                                (String::from("D5"),0 as u8),(String::from("E5"),0 as u8),(String::from("F5"),0 as u8),
                                (String::from("G5"),0 as u8),(String::from("H5"),0 as u8),
                                (String::from("I5"),0 as u8),(String::from("J5"),0 as u8),
                                (String::from("A6"),0 as u8),(String::from("B6"),0 as u8),(String::from("C6"),0 as u8),
                                (String::from("D6"),0 as u8),(String::from("E6"),0 as u8),(String::from("F6"),0 as u8),
                                (String::from("G6"),0 as u8),(String::from("H6"),0 as u8),
                                (String::from("I6"),0 as u8),(String::from("J6"),0 as u8),
                                (String::from("A7"),0 as u8),(String::from("B7"),0 as u8),(String::from("C7"),0 as u8),
                                (String::from("D7"),0 as u8),(String::from("E7"),0 as u8),(String::from("F7"),0 as u8),
                                (String::from("G7"),0 as u8),(String::from("H7"),0 as u8),
                                (String::from("I7"),0 as u8),(String::from("J7"),0 as u8),
                                (String::from("A8"),0 as u8),(String::from("B8"),0 as u8),(String::from("C8"),0 as u8),
                                (String::from("D8"),0 as u8),(String::from("E8"),0 as u8),(String::from("F8"),0 as u8),
                                (String::from("G8"),0 as u8),(String::from("H8"),0 as u8),
                                (String::from("I8"),0 as u8),(String::from("J8"),0 as u8)
                            ]);
        
        movie.seats = seat_arrangement;

        msg!(" Movie Added! ");
        Ok(())
    }

    pub fn book_chair (ctx: Context<BookChair>,
                            list: Vec<String>,price: u8,
                        ) -> ProgramResult {

        let movie = &mut ctx.accounts.movie;
        if (price==0 || (price < (list.len() as u8*movie.ticket_price))){
            msg!(" Price tampering occurs ");
            return Err(ProgramError::InvalidInstructionData);
        }
        for i in list.iter(){
            movie.seats.insert(i.to_string(), 1 as u8);
            //movie.seats[i] = 1 as u8;
        }
        return Ok(())
    }
    


}

#[derive(Accounts)]
pub struct CreateAccount<'info> {
    #[account(
            init, 
            seeds = [b"user".as_ref(),authority.key().as_ref()],
            bump,
            payer = authority, 
            space = size_of::<TheaterAccount>() + 512,
        )
     ]
    pub user: Account<'info, TheaterAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: UncheckedAccount<'info>, 
}

#[derive(Accounts)]
pub struct CreateMovie<'info> {
    //#[account(mut, seeds = [b"owner".as_ref()], bump)]
    //pub owner: Account<'info, OwnerAccount>,
    #[account(
        init,
        seeds = [b"movie".as_ref(), authority.key().as_ref()],
        bump,
        payer = authority,
        space = size_of::<MovieAccount>() + 1024,
    )]
    pub movie: Account<'info, MovieAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: UncheckedAccount<'info>,


    // Token program
    //#[account(constraint = token_program.key == &token::ID)]
    //pub token_program: Program<'info, Token>,
}
#[derive(Accounts)]
pub struct BookChair<'info> {
    #[account(mut)]
    pub movie: Account<'info, MovieAccount>,

    #[account(
            init, 
            seeds = [b"chair".as_ref(),authority.key().as_ref()],
            bump,
            payer = authority, 
            space = size_of::<ChairAccount>() + 512,
        )
     ]
    pub chair: Account<'info, ChairAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: UncheckedAccount<'info>, 
}


#[account]
pub struct OwnerAccount{
    pub author: Pubkey
}


#[account]
pub struct TheaterAccount {
    pub theater_name: String,
    pub theater_address: String,
    pub theater_inview_url: String,
    pub wallet_address: Pubkey,
}

#[account]
pub struct MovieAccount{
    pub movie_creator: Pubkey,
    pub movie_title: String,
    pub movie_genre: Vec<String>,
    pub movie_languages: Vec<String>,
    pub movie_poster_url: String,
    pub ticket_price: u8,
    pub loves : u8,
    pub seats: HashMap<String, u8>
}

#[account]
pub struct ChairAccount {
    pub chairs_list: Vec<String>,
    pub paid_price: u8,
}